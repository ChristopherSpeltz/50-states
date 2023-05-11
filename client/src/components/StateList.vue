<template>
  <div>
    <div>
      <state-summary v-bind:states="states"></state-summary>
    </div>
    <!-- code to bind state detail to objects in array -->
    <div class="state-list-container">
      <div
        class="state-container"
        v-for="state in states"
        v-bind:key="state.name"
      >
        <state-detail
          v-bind:state="state"
          v-on:update-visited="updateVisited"
        ></state-detail>
      </div>
    </div>
  </div>
</template>

<script>
import StateDetail from "./StateDetail.vue";
import StateSummary from "./StateSummary";

export default {
  components: { StateDetail, StateSummary },
  name: "StateList",
  data() {
    return {
      states: [],
    };
  },
  mounted() {
    this.fetchAllStates();
  },
  methods: {
    fetchAllStates() {
      this.$stateService
        .getAllStates()
        .then((states) => {
          this.states = states;
        })
        .catch((err) => {
          alert("Sorry, can't fetch state list"); // error alert for user
          console.error(err); // logging for developer
        });
    },
    updateVisited(stateName, visited) {
      this.$stateService
        .setVisited(stateName, visited)
        .then(() => {
          this.fetchAllStates();
        })
        .catch((err) => {
          alert("Sorry, can't update state"); // error alert for user
          console.error(err); // logging for developer
        });
    },
  },
};
</script>

<style scoped>
.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.state-container {
  margin: 1rem;
}
</style>
