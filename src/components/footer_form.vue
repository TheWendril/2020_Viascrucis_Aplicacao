<template>
    <div>
        <footer class="footer shadow p-4">
            <div class="container">
            <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class=" menu pl-2">
                          <span>Patrocinadores</span>
                            <li>
                                <a href="https://www.feirafuneraria.com.br/" target="_blank">Feira Funerária</a>
                            </li>
                                
                            <li>
                                <a href="https://www.instagram.com/guiafunerario/?igshid=1kyabcnrrxobc" target="_blank">Guia Funerário</a>
                            </li>
                        </ul>    
                    </div>
                    
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="menu pl-2">
                            <span>Social</span>    
                            <li>
                                <a href="https://www.facebook.com/viascrucis" target="_blank">Facebook</a>
                            </li>
                                
                            <li>
                                <a href="https://www.instagram.com/viascrucis/" target="_blank">Instagram</a>
                            </li>
                                
                            <li>
                                <a onclick="window.open('https://github.com/TheWendril/2020_Viascrucis_Aplicacao'); window.open('https://github.com/micaelcc/2020_Viascrucis_API')" target="_blank">Github</a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/channel/UCzB9QLp14xlvj4bCMD2Y9Hw" target="_blank">Youtube</a>
                            </li>
                        </ul>
                    </div>
            
                    <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="address pl-2">
                            <span>Contato</span>       
                            <li>
                            <i class="fa fa-phone" aria-hidden="true"></i> <a> (88) 9811-96171</a>
                            </li>
                            <li>
                            <i class="fa fa-map-marker" aria-hidden="true"></i> <a>Rua Júlio Alves da Silva, 153 apto 202</a>
                            </li> 
                            <li>
                            <i class="fa fa-envelope" aria-hidden="true"></i> <a>contato@viascrucis.com.br</a>
                            </li> 
                    </ul>
                </div>
            
            
            </div> 
            </div>


        </footer>

        <footer>
            
            <div class="container-fluid ff">

                <div class="row pt-3 pb-2">
                    <div class="col-md-4 col-sm-12 offset-md-2">
                        <h6 class="text-white-50">©Viascrucis 2017-2020</h6>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center col-sm-12">
                        <img class="mr-2" src="https://img.icons8.com/ios-glyphs/30/000000/microsoft-admin--v1.png" height="20px"/>
                        <h6><a class="text-white-50" @click="go_to_admin">Página Admin</a></h6>
                    </div>
                </div>

            </div>

        </footer>

    </div>
</template>

<script>

export default {
    methods: {
        go_to_admin: function(){
            this.$router.push('/admin')
        }
    }
}
</script>

<style scoped>

.btn{
    margin-top: 20px;
}

.search-text{
	margin-top:50px;
	background-color: hsl(210, 13%, 18%);
	padding-top:60px;
	padding-bottom:60px;
}

.input-search-text{

    height: 100px;
	width:40%;
	padding-left:20px;
    color:#333;


}

.search-text .input-search{
	height:45px;
	width:40%;
	padding-left:20px;
    color:#333;
} 

.search-text .btn-search{
    background: #da3e44;
    font-family:Roboto;
    border:none;
	color:#FFF;
	height: 45px;
    width: 80px;
}

.search-text h4{
    color: #FFF;
    font-weight: 700;
}

footer{
     background-color: #33383c;
     bottom: 0;
     width: 100%;
}	       

.logo{
    color:#FFF;
    font-weight:700;
    font-size:30px;
}

.address span , .menu span{
   color: #FFF; 
   font-weight: bold; 
   border-bottom: 1px solid #c7c7c7; 
   padding: 10px 0px;
   display: block;
   text-transform: uppercase;
   font-size: 16px;
   letter-spacing: 3px;
}
 
.address li a , .menu li a{
    color:#FFF;
    letter-spacing: 3px;
    text-decoration:none;
    font-size:14px;
}

.address li, .menu li{
    margin:20px 0px;
    list-style: none;
}

.address li a:hover , .menu li a:hover{
    color: #1779e9;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}

.address .fa{
    color: #da3e44;
    margin-right: 10px;
    font-size:18px;
}

a:hover{
    cursor: pointer;
}

.ff{
    background-color: #2b2e31;
}
</style>