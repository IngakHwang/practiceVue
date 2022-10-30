<template>
    <div class="alert-box">
        <strong>Slot Test</strong>
        <br/>
        <br/>
        <slot/>
    </div>
</template>

<style scoped>
.alert-box{
    color: #666;
    border: 1px solid blue;
    border-radius: 4px;
    padding: 20px;
    background-color: #f8f8f8;
}

strong{
    color: Blue;
}
</style>