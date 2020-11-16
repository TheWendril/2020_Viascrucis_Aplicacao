<template>
<div>

    <div class="container">
        <form class="contact_form">
            <div class="row">
                <div class="col">
                    <h3 class="text-primary">Contato</h3>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6 col-sm-12 mt-3">
                    <input type="text" class="form-control shadow-sm" id="nome_form" placeholder="Nome" required>
                    </div>
                <div class="col-md-6 col-sm-12 mt-3">
                    <input type="text" class="form-control shadow-sm" id="sobrenome_form" placeholder="Sobrenome" required>     
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <div class="form-group">
                        <input type="email" class="form-control shadow-sm" id="input_email" aria-describedby="email_contact" placeholder="Seu email">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <textarea class="form-control shadow-sm" id="validationTextarea" placeholder="Digite sua mensagem..." required></textarea>

                </div>
            </div>
            <div class="row mt-3 mb-5">
                <div class="col">
                    <button class="btn btn-outline-primary shadow-sm">Enviar</button>
                </div>
            </div>
        </form>
    </div>

</div>

</template>

<script>
export default {
    
}
</script>

<style scoped>

.contact_form{
    padding-left: 13vw;
    padding-right: 13vw;

}



</style>