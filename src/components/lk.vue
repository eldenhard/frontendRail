<template>
    <div class="lk">
        <h2>Личный кабинет сотрудника</h2>

        <br><br>
    <form id="Anketa" method="POST" action="http://10.1.5.65/api/reports/kpi/create/">
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
      <p class="answer">Готовность неукоснительно выполнять все производственные задания, порученные руководителем.</p>

     
        <input type="radio" class="born" name="born" value="A" checked>
        <label for="A" class="borough ">Неисполнителен, склонен под любыми предлогами избегать получения новых заданий. Были случаи прямого отказа от выполнения заданий.</label><br>

        <input type="radio" class="born" name="born" value="B">
        <label id="correct1" class="borough" for="B">Низкий уровень исполнительности. Иногда пытается избе-жать получения новых заданий, умело находя предлоги</label><br>

        <input type="radio" class="born" name="born" value="C">
        <label for="C" class="borough">Хороший уровень исполнительности, но нельзя сказать, что каждый день без исключений. Берется за выполнение любых производственных заданий, но не всегда охотно.</label><br>

        <input type="radio" class="born" name="born" value="D">
        <label for="D" class="borough">Безукоризненный уровень исполнительности. Всегда охотно берется за выполнение всех производственных заданий, порученных руководителем.</label><br>
      </div>

      <div id="block-answer">
      <p class="answer">Способность справляться со своими обязанностями и поручениями. Умение выявлять и решать возникающие в работе проблемы</p>
     
        <input type="radio" class="born" name="born" value="A" checked>
        <label for="A" class="borough ">Часто не справляется со своими обязанностями и поручениями или заданиями. Не умеет выявлять проблемы и с трудом решает их</label><br>

        <input type="radio" class="born" name="born" value="B">
        <label id="correct1" class="borough" for="B">Как правило справляется со своими обязанностями, но порой не выполняет их так как надо или с трудом решает возникающие проблемы</label><br>

        <input type="radio" class="born" name="born" value="C">
        <label for="C" class="borough">Практически всегда хорошо справляется со всеми обязанностями, умело решает проблемы, но нельзя сказать, что каждый день без исключений</label><br>

        <input type="radio" class="born" name="born" value="D">
        <label for="D" class="borough">Проявляет отличную способность справляться со всеми обязанностями и производственными заданиями. Всегда умело выявляет и быстро решает возникающие проблемы</label><br>
      </div>
     

    <div id="block-answer">
      <p class="answer">Компетентность. Знание используемых приемов и мето-дов работы и умение в точности им следовать, наличие необходимых навыков</p>

     
        <input type="radio" class="born" name="born" value="A" checked>
        <label for="A" class="borough ">Некомпетентен. Не знает используемые приемы и методы работы и не стремится быстро освоить их</label><br>

        <input type="radio" class="born" name="born" value="B">
        <label id="correct1" class="borough" for="B">Недостаточно хорошо знает нужные приемы работы, пока имеет слабые навыки и медленно их развивает</label><br>

        <input type="radio" class="born" name="born" value="C">
        <label for="C" class="borough">Хорошо знает используемые методы работы, но нельзя сказать, что всегда в точности следует им</label><br>

        <input type="radio" class="born" name="born" value="D">
        <label for="D" class="borough">Компетентен. Отлично знает все методы работы и неукоснительно следует им каждый рабочий день</label><br>
      </div>


      <div id="block-answer">
      <p class="answer">Заинтересованность и активность в вопросах повышения качества, производительности труда и освоения эффективных методов работы</p>

     
        <input type="radio" class="born" name="born" value="A" checked>
        <label for="A" class="borough ">Часто сопротивляется внедрению новых технологий, методов работы, направленных на повышение качества и производительности труда</label><br>

        <input type="radio" class="born" name="born" value="B">
        <label id="correct1" class="borough" for="B">Не сопротивляется, но и не проявляет интереса к вопросам повышения качества и производительности труда</label><br>

        <input type="radio" class="born" name="born" value="C">
        <label for="C" class="borough">Всегда поддерживает все нововведения, помогает осваивать новые методы работы, но не в достаточной сте-пени активно</label><br>

        <input type="radio" class="born" name="born" value="D">
        <label for="D" class="borough">Не только активно помогает осваивать новые методы работы, но и сам часто выдвигает различные рационализаторские предложения</label><br>
      </div>

      <div id="block-answer">
      <p class="answer">Выполнение планового объема работ по выданным производственным заданиям.</p>

     
        <input type="radio" class="born" name="born" value="A" checked>
        <label for="A" class="borough ">Не выполнялись запланированные работы по заданиям в срок</label><br>

        <input type="radio" class="born" name="born" value="B">
        <label id="correct1" class="borough" for="B">Имели место случаи недовы-полнения в полном объеме запланированных работ по заданиям</label><br>

        <input type="radio" class="born" name="born" value="C">
        <label for="C" class="borough">Выполнялся весь объем запланированных работ, но были случаи нарушения сроков</label><br>

        <input type="radio" class="born" name="born" value="D">
        <label for="D" class="borough">Все запланированные работы по заданиям выполнялись в полном объеме и в установленные сроки </label><br>
      </div>

      <div id="block-answer">
      <p class="answer">Качество выполненных работ, поручений.</p>

     
        <input type="radio" class="born" name="born" value="A" checked>
        <label for="A" class="borough ">Работы выполнялись некачественно. Имелись случаи брака и возврата заданий на доработку</label><br>

        <input type="radio" class="born" name="born" value="B">
        <label id="correct1" class="borough" for="B">Хотя и очень редки случаи брака в работе, но были погрешности и недоработки</label><br>

        <input type="radio" class="born" name="born" value="C">
        <label for="C" class="borough">Работы выполнялись достаточно качественно, но имели место небольшие погрешности.</label><br>

        <input type="radio" class="born" name="born" value="D">
        <label for="D" class="borough">Работы выполнялись безукоризненно, аккуратно, четко, без брака, всегда в строгом соответствии со стандартами</label><br>
      </div>


      <br>
        <button class="button Accept form-btn" type="submit">Отправить</button>
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
    methods: {
        
 Send: function(staff){
   fetch('http://10.1.5.65/api/reports/kpi/create/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Basic YS5yZXNoZXRpbG9AdGVodHJhbnMuY29tOlRlaHRyYW5zMjAyMg==' 
    },
        body: {
    "employee": '',
    "manager": '',
    "a1": "c1",
    "a2": "c1",
    "a3": "c1",
    "a4": "c1",
    "a5": "c1",
    "a6": "c1",
    'user.id': ''
    
}
       
    })
  .then((response) => 
    {
        if (response.ok){
            return response.json().then((data)=>{
                console.log(data);
                alert('Ваши данные успешно отправлены')

            })
           
        }
        else{
            console.log('NOT OK')
        }
    })

}
    }
}
</script>


</script>
    