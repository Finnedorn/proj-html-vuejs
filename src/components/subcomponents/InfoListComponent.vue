<template>
    <div class="py-2 d-flex align-items-center ">
        <i :class="iconclass" class="me-2"></i>
        <div class="fs-6 text-my-blue">
            {{ title }}
        </div>
    </div>
</template>

<script>
import { store } from '../../assets/data/store';
export default {
    name: 'InfoListComponent',
    props: {
        iconclass: String,
        title: String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables' as *;

i {
    color: $white;
    font-size: 0.8rem;
}
</style>