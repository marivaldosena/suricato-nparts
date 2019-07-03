<template>
    <Modal>
        <template #header>
            <h2>Criar produto</h2>
        </template>
        <template #main>
            <form id=""
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate>
                <button type="submit" class="btn btn-primary" :disabled="submitted">Salvar</button>
            </form>
        </template>
    </Modal>
</template>

<script>
    import Modal from '../../../components/Modal/Modal';

    export default {
        name: "CreateProductModal",
        components: {
            Modal,
        }
    }
</script>

<style scoped>

</style>
