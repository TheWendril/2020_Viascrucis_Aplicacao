<template>

    <div class="container-fluid">

        <div class="row text-center">
            <div class="col-md-12 text-center">
                <img class="send_image shadow" src="../assets/paper-plane.png"/>
                <h4 class="font-weight-normal text-light">Entrar em Contato!</h4>
            </div>
        </div>
        <div class="row">
            <div class="col frm">
                <input class="form-control form-control-lg bg-light input shadow" type="text" placeholder="Email">
                <textarea class="form-control bg-light input shadow" id="validationTextarea" placeholder="Digite sua mensagem" required></textarea>
                <button class="btn btn-outline-primary input">Enviar</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <footer_card title="Endereço" src_img="../assets/paper-plane.png" content="avenida sla"/>
            </div>
            <div class="col"></div>
            <div class="col"></div>
        </div>

    </div>

</template>

<script>

import footer_card from './footer_card.vue'

export default {
    
    components: {
        footer_card
    }
}
</script>

<style scoped>

.send_image{
    width: 1.8%;
}

.frm{
    padding-left: 35%;
    padding-right: 35%;
}

.input{
    margin-top: 10px;
}

.container-fluid{
    background-image: url('../assets/bg-masthead.png');
}

</style>