<template>
    <div class="lk">
        <h2>Личный кабинет сотрудника</h2>

        <br><br>
    <form>
    <label  for="admin" style=" position: relative; left: 50%; transform: translate(-50%, 0); width: 100% !important;">
    <select id="admin" required style="width: 50% !important;" >
        <option value="" disabled="disabled" selected="selected">Начальник</option>
        <option  v-for="staf in staff" :key="staf.id">{{staf.manager}} </option>
  </select>
</label>

<br>
<br>
<label  for="staff" style=" position: relative; left: 50%; transform: translate(-50%, 0); width: 100% !important;">
  <select id="staff" required style="width: 50% !important;">
    <option value="" disabled="disabled" selected="selected">Сотрудник</option>
    <option  v-for="staf in staff" :key="staf.id">{{staf.first_name}} {{staf.last_name}}</option>
  </select>
</label>




        <div id="block-answer">
      <p class="answer">Готовность неукоснительно вы-полнять все производственные задания, порученные руководителем.</p>

     
        <input type="radio" class="born" name="born" value="A" checked>
        <label for="A" class="borough ">Неисполнителен, склонен под любыми предлогами избегать получения новых заданий. Были случаи прямого отказа от выполнения заданий.</label><br>

        <input type="radio" class="born" name="born" value="B">
        <label id="correct1" class="borough" for="B">Низкий уровень исполнительности. Иногда пытается избе-жать получения новых заданий, умело находя предлоги</label><br>

        <input type="radio" class="born" name="born" value="C">
        <label for="C" class="borough">Хороший уровень исполнительности, но нельзя сказать, что каждый день без исключений. Берется за выполнение любых производственных заданий, но не всегда охотно.</label><br>

        <input type="radio" class="born" name="born" value="D">
        <label for="D" class="borough">Безукоризненный уровень исполнительности. Всегда охотно берется за выполнение всех производственных заданий, порученных руководителем.</label><br>
      </div>

      <br>
        <button class="button Accept form-btn">Отправить</button>
    </form>

 
    </div>
</template>

<style>
#block-answer{
    border-radius: 50px;
background: #f5f5f5;
box-shadow:  10px 10px 30px #d0d0d0,
             -10px -10px 30px #ffffff;
             width: 90%;
             position: relative;
             left: 50%;
             transform: translate(-50%,0);
             margin-top: 2%;
             padding: 3% 2%;
         
}
.staffs {
    margin-left: 25%;
}
.form-btn {
    width: 90%;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    margin-bottom: 10%;
    height: 80px;
    font-size: 22px;
}
#admin, #staff {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
}
.answer {
    text-align: center;
    padding-top: 3%;
    font-size: 20px;
    font-weight: 600;
}
 .lk h2{
    text-align: center;
    padding-top: 2%;
}
.form {
    width: 70%;
    border: 1px solid black;
}
.select-form {
    width: 50%;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    margin-top: 2%;
}
.description-form {
    text-align: center;
}
</style>

<script>
import {mapState} from "vuex";

export default{
name: 'lk',
data(){
    return{
        'staff': [],
    }
},
mounted(){
       fetch('http://10.1.5.65/api/personal/users/', {
        headers: {
            'Authorization': 'Basic YS5yZXNoZXRpbG9AdGVodHJhbnMuY29tOlRlaHRyYW5zMjAyMg=='
        },
        method: 'GET'
    })
    .then((response) => {
                if (response.ok){
                    return response.json().then(r=>{
                        //console.log(data);
                        // 1-е это сваойство Respone, второе свойство JSON
                        this.staff = r.data;
                        console.log(this.staff)
               })
           }
           else{
               console.log('NOT OK')
           }
       })
    },

computed: {
    ...mapState({
    user: state => state.user
    })
}
}
    
    
    
    </script>
    