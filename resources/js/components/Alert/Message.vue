<script>
    export default {
        name: "Message",
        props: {
            message: {
                type: [String, Object],
            },
        },
        render(c){
            if(typeof this.message === "object"){
                return c('ul', Object.keys(this.message).map((item) => {
                    return this.message[item].map((message) => {
                        return c('li', message);
                    })
                }));
            }
            return c('div', this.message);
        }
    }
</script>

<style scoped>

</style>
