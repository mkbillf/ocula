<template>
    <svg class="icon" :class="className">
        <use v-bind:xlink:href="href"/>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    
    props: {

        name: {
            type: String
        }

    },

    computed: {

        className() {
            return `icon--${this.name}`;
        },

        href() {
            return `/feather-sprite.svg#${this.name}`;
        }

    }

});
</script>

<style lang="scss">

    .icon {
        width: 1.5em;
        height: 1.5em;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        vertical-align: middle;
    }

</style>