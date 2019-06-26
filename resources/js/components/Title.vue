<template>
    <div class="row">
        <div class="col-12">
            <h2 class="content-title">{{route.meta.title}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        computed: {
            route(){
                return this.$route
            }
        },
        created(){
            // console.log(this.route)
        }
    }
</script>

<style scoped>

</style>