<template>
    <ul class="breadcrumb-list">
        <li
                v-for="(breadcrumb, idx) in breadcrumbList"
                :key="idx"
                v-on:click="routeTo(breadcrumb)"
                class="breadcrumb-item"
                :class="{'linked': !!breadcrumb.path}"
        >
            {{breadcrumb.name}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Breadcrumb",
        data(){
            return{
                breadcrumbList: [],
                isRoot: true,
            }
        },
        methods: {
            routeTo(breadcrumb){
                // if (this.breadcrumbList[pRouteTo.path])
                if(breadcrumb.path)
                    this.$router.push(breadcrumb.path)
            },
            updateList(){
                this.breadcrumbList = this.$route.meta.breadcrumb;
                this.isRoot = (this.breadcrumbList[0].path);
            }
        },
        mounted(){
            this.updateList();
            // console.log(this.breadcrumbList)
        },
        watch: {
            '$route' (to, from) {
                this.updateList();
            }
        }
    }
</script>

<style scoped>

</style>