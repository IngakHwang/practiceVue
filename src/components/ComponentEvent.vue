<script setup>
defineProps(
    {
        firstName: String,
        lastName: String
    }
)
defineEmits(['update:firstName', 'update:lastName'])

</script>

<template>
    <input
        type="text"
        v-bind:value="firstName"
        v-on:input="$emit('update:firstName', $event.target.value)"
    />
    <input
        type="text"
        v-bind:value="lastName"
        v-on:input="$emit('update:lastName', $event.target.value)"
    />
    <p>{{firstName}} {{lastName}}</p>
</template>