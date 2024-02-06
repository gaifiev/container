<template>
  <div>
    <BacklongDoctrors />
    <RosterDoctors /> 
  </div>
</template>

<script>
import RosterDoctors from "../blocks/Roster-doctors.vue";
import BacklongDoctrors from "../blocks/BacklongDoctrors.vue";

export default {
  name: "DoctorsVue",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { RosterDoctors, BacklongDoctrors },
};
</script>

<style lang="scss" scoped></style>
