<template>
    <div>
     
        <Backdrop/>
        <MapComponent/>
    </div>
</template>

<script>
import Backdrop from '../blocks/Backdrop.vue';
import MapComponent from '../blocks/MapComponent.vue';

export default {
    name: 'ContactVue',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Backdrop, MapComponent}
};
</script>

<style lang="scss" scoped>

</style>