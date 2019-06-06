<script>
    import feather from 'feather-icons';

    export default {
        name: "FeatherIcon",
        props: {
            fill: {
                type: String,
                default: 'none',
            },

            size: {
                type: [Number, String],
                default: 24,
            },

            stroke: {
                type: String,
                default: 'currentColor',
            },

            strokeLinecap: {
                type: String,
                default: 'round',
            },

            strokeLinejoin: {
                type: String,
                default: 'round',
            },

            strokeWidth: {
                type: [Number, String],
                default: 2,
            },

            tag: {
                type: String,
                default: 'i',
            },

            type: {
                type: String,
                required: true,
                validator(type) {
                    if (!feather.icons[type]) {
                        throw new Error(`"${type}" is not an available icon type.`);
                    }

                    return true;
                },
            },
        },
        render(c){
            const {
                size,
                type,
            } = this;
            const icon = feather.icons[type];

            if(icon){
                return c('svg', {
                    attrs: {
                        ...icon.attrs,
                        fill: this.fill,
                        height: size,
                        stroke: this.stroke,
                        'stroke-linecap': this.strokeLinecap,
                        'stroke-linejoin': this.strokeLinejoin,
                        'stroke-width': this.strokeWidth,
                        width: size,
                    },
                    class: [icon.attrs.class, 'feather__content'],
                    domProps: {
                        innerHTML: icon.contents,
                    }},
                );
            }
        }
    }
</script>

<style scoped>

</style>