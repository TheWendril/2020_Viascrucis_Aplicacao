<template>

<!------ Include the above in your HEAD tag ---------->
<div>
    <div class="container contact">
        <div class="row">
            <div class="col-md-3">
                <div class="contact-info">
                    <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                    <h2>Contato</h2>
                    <h4>Envie-nos uma mensagem!</h4>
                </div>
            </div>
            <div class="col-md-9">
                <div class="contact-form">
                    <div class="form-group">
                        <div class="col-sm-10">          
                            <input type="text" class="form-control" id="fname" placeholder="Nome" name="fname">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10">          
                            <input type="text" class="form-control" id="lname" placeholder="Sobrenome" name="lname">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" placeholder="Email" name="email">
                        </div>
                    </div>
                        <div class="form-group">
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Digite sua mensagem..."></textarea>
                        </div>
                    </div>
                    <div class="form-group">        
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <div>

    <div class="container">
        <form class="contact_form">
            <div class="row">
                <div class="col">
                    <h4 class="text-black-50">Contato</h4>
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
                    <button class="btn btn-outline-info shadow-sm">Enviar</button>
                </div>
            </div>
        </form>
    </div>

</div> -->

</template>

<script>
export default {
    
}
</script>

<style scoped>
/*
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.contact_form{
    padding-left: 13vw;
    padding-right: 13vw;

}


h4{
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
}

.btn-primary.custom-btn {
  color:black;
  background-color: white;
  border-color: #36c3e1;
}

.custom-btn:hover{
  transition: 0.5s;
  color: white;
	background-color: #36c3e1;;

}
*/

body{
		background-color: #25274d;
	}
	.contact{
		padding: 4%;
		height: 400px;
	}
	.col-md-3{
		background: rgb(54, 195, 225);
		padding: 4%;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}
	.contact-info{
		margin-top:10%;
	}
	.contact-info img{
		margin-bottom: 15%;
	}
	.contact-info h2{
		margin-bottom: 10%;
	}
	.col-md-9{
		background: #fff;
		padding: 3%;
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
	.contact-form label{
		font-weight:600;
	}
	.contact-form button{
		background: #25274d;
		color: #fff;
		font-weight: 600;
		width: 25%;
	}
	.contact-form button:focus{
		box-shadow:none;
	}

</style>