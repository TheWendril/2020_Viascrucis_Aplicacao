<template>
    <div>
        <footer class="footer p-4">
            <div class="container">
            <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                    <span class="logo"><p>Viascrucis</p></span>
                    <p class="text-white-50 text-justify">Um projeto da Universidade Estadual do Ceará</p>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="menu">
                            <span>Social</span>    
                            <li>
                                <a href="https://www.facebook.com/viasdasaudade/" target="_blank">Facebook</a>
                            </li>
                                
                            <li>
                                <a href="https://www.instagram.com/viasdasaudade/" target="_blank">Instagram</a>
                            </li>
                                
                            <li>
                                <a href="https://github.com/TheWendril/viascrucis" target="_blank">Github</a>
                            </li>
                        </ul>
                    </div>
            
                    <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="address">
                            <span>Contato</span>       
                            <li>
                            <i class="fa fa-phone" aria-hidden="true"></i> <a>(85) 98853-0566</a>
                            </li>
                            <li>
                            <i class="fa fa-map-marker" aria-hidden="true"></i> <a>Av. Dom Aureliano Matos, 2058</a>
                            </li> 
                            <li>
                            <i class="fa fa-envelope" aria-hidden="true"></i> <a>viasdasaudade@gmail.com</a>
                            </li> 
                    </ul>
                </div>
            
            
            </div> 
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    
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



</style>