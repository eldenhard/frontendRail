<template>

<div id="id01" class="modal" style="display:block">

  <form class="modal-content animate" method="post" action="/" @submit.prevent="submitEntry">
    <div class="container">

      <label for="uname"><b>Логин</b></label>
      <input type="text" required placeholder="Введите логин" v-model="login">

      <label for="psw"><b>Пароль</b></label>
      <input type="password" required placeholder="Введите пароль" v-model="password"> 

      <button type="submit" >Войти</button>
    </div>
  </form>
</div>

</template>





<!-- <script>
export default{
    name: 'Authorization',
    data(){
        return{
            login: "a.reshetilo@tehtrans.com",
            password: "Tehtrans2022"
        }
    },
    methods: {
        submitEntry: function(event) {
            event.preventDefault()

            fetch("http://10.1.5.65/api/personal/login/", {
            method: "post",
            mode: 'cors',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': this.login,
                'password': this.password
            })
            })

            .then((response) => {
                if (response.ok){
                    return response.json().then((data)=>{
                        console.log(data);
               })
           }
           else{
               console.log('NOT OK')
           }
       })
 
        }
    }
}



</script> -->


<style>

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}
button:hover {
    opacity: 0.8;
}
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}

.container {
    padding: 16px;
}

span.psw {
    float: right;
    padding-top: 16px;
}
.modal {
    display: none; 
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; 
    border: 1px solid #888;
    width: 40%;
}

.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: red;
    cursor: pointer;
}

.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
}
    
@keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}

@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
}
</style>
