<template>
<div id="tableMain">
    <div class="table1" style="display: flex;">
    <table style="margin-top: -0.1px;">
      <thead>
        <tr>
          <th>{{WagonModel.number}}</th>
          <th> {{WagonModel.is_problem}}</th>
          <th>{{WagonModel.features}}</th>
          <th>{{WagonModel.volume}}</th>
          <th>{{WagonModel.tare}}</th>
          <th>{{WagonModel.type}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="wagon in WagonsModel" :key="wagon.number">{{wagon.number}}</td>
          <td v-for="wagon in WagonsModel" :key="wagon.number">{{wagon.is_problem}}</td>
          <td v-for="wagon in WagonsModel" :key="wagon.number">{{wagon.features}}</td>
          <td v-for="wagon in WagonsModel" :key="wagon.number">{{wagon.volume}}</td>
          <td v-for="wagon in WagonsModel" :key="wagon.number">{{wagon.tare}}</td>
          <td v-for="wagon in WagonsModel" :key="wagon.number">{{wagon.type}}</td>
        </tr>
       
       
      </tbody>
    </table>
                <b-card no-body
                style="background: #ECECEC;
                border: none;
                text-decoration: none;
                width: 100%;">
                    <b-tabs card  style="background: #ECECEC;"  small card>
                        <b-tab title="Состояние" active style="color: black;" >
                                <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                        <thead>
                                            <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th> {{WagonStateModel.state}}</th>
                                            <th>{{WagonStateModel.state_value}}</th>
                                            <th>{{WagonStateModel.state_value_digital}}</th>
                                            <th>{{WagonStateModel.updated_at}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>
                                                <span>{{WagonStateModel.state}}</span>
                                            </td>
                                            <td>
                                                <span>{{WagonStateModel.state_value}}</span>
                                            </td>
                                            <td>
                                                <span>{{WagonStateModel.state_value_digital}}</span>
                                            </td>
                                            <td class="wrap">{{WagonStateModel.updated_at}}</td>
                                            </tr>
                                        </tbody>
                                    </table>  
                                </div>       
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Тип">
                                <b-card-text style="margin-top: -30px;">
                                    <div style="width:100%; overflow: auto; ">
                                    <table>
                                        <thead>
                                            <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonTypeModel.name}}</th>
                                            <th>{{WagonTypeModel.short_name}}</th>
                                            <th>{{WagonTypeModel.in_use}}</th>
                                            <th>{{WagonTypeModel.name_rp}}</th>
                                            <th>{{WagonTypeModel.foot_length}}</th>
                                            <th>{{WagonTypeModel.code_ustng_empty}}</th>
                                            <th>{{WagonTypeModel.code_gng_empty}}</th>
                                            <th>{{WagonTypeModel.code_etsng_empty_repair}}</th>
                                            <th>{{WagonTypeModel.trf_code}}</th>
                                            <th>{{WagonTypeModel.rtf_equal_container_code}}</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>
                                                {{WagonTypeModel.name}}
                                            </td>
                                            <td>
                                                {{WagonTypeModel.short_name}}
                                            </td>
                                            <td>
                                                {{WagonTypeModel.in_use}}
                                            </td>
                                            <td class="wrap">{{WagonTypeModel.name_rp}}</td>
                                            <td>
                                                {{WagonTypeModel.foot_length}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.code_ustng_empty}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.code_gng_empty}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.code_etsng_empty_repair}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.trf_code}}                                           
                                             </td>
                                             <td>
                                                {{WagonTypeModel.rtf_equal_container_code}}                                           
                                             </td>
                                            
                                            </tr>
                                        
                                        </tbody>
                                    </table>  
                                </div>                                       
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Паспорт">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                      <thead>
                                        <tr>
                                            <th>{{WagonPassportModel.next_planed_repair_date}}</th>
                                            <th>{{WagonPassportModel.last_planed_repair_date}}</th>
                                            <th>{{WagonPassportModel.capacity}}</th>
                                            <th>{{WagonPassportModel.model}}</th>
                                            <th>{{WagonPassportModel.days_before_date_plan_repair}}</th>
                                            <th>{{WagonPassportModel.verbose_name}}</th>
                                            <th>{{WagonPassportModel.next_plan_repair_kind}}</th>
                                            <th>{{WagonPassportModel.build_date}}</th>
                                            <th>{{WagonPassportModel.lifetime}}</th>
                                            <th>{{WagonPassportModel.tenant_code_abd}}</th>
                                            <th>{{WagonPassportModel.owner_code_abd}}</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td>{{WagonPassportModel.next_planed_repair_date}}</td>
                                            <td>{{WagonPassportModel.last_planed_repair_date}}</td>
                                            <td>{{WagonPassportModel.capacity}}</td>
                                            <td>{{WagonPassportModel.model}}</td>
                                            <td>{{WagonPassportModel.days_before_date_plan_repair}}</td>
                                            <td>{{WagonPassportModel.verbose_name}}</td>
                                            <td>{{WagonPassportModel.next_plan_repair_kind}}</td>
                                            <td>{{WagonPassportModel.build_date}}</td>
                                            <td>{{WagonPassportModel.lifetime}}</td>
                                            <td>{{WagonPassportModel.tenant_code_abd}}</td>
                                            <td>{{WagonPassportModel.owner_code_abd}}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Принадлежность">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                       <thead>
                                        <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonBelongModel.name}}</th>
                                            <th>{{WagonBelongModel.owner}}</th>
                                            <th>{{WagonBelongModel.tenant}}</th>
                                            <th>{{WagonBelongModel.in_company_control}}</th>
                                            <th>{{WagonBelongModel.wagon_source_company}}</th>
                                            <th>{{WagonBelongModel.owner_okpo}}</th>
                                            <th>{{WagonBelongModel.tenant_okpo}}</th>
                                        </tr>
                                       </thead>
                                       <tbody>
                                        <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>{{WagonBelongModel.name}}</td>
                                            <td>{{WagonBelongModel.owner}}</td>
                                            <td>{{WagonBelongModel.tenant}}</td>
                                            <td>{{WagonBelongModel.in_company_control}}</td>
                                            <td>{{WagonBelongModel.wagon_source_company}}</td>
                                            <td>{{WagonBelongModel.owner_okpo}}</td>
                                            <td>{{WagonBelongModel.tenant_okpo}}</td>

                                        </tr>
                                       </tbody>
                                    </table>  
                                </div>                                   
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Ремонт">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                       <thead>
                                        <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonRepairModel.nrp}}</th>
                                            <th>{{WagonRepairModel.malfunction_current}}</th>
                                            <th>{{WagonRepairModel.repair_type}}</th>
                                            <th>{{WagonRepairModel.nrp_date}}</th>
                                            <th>{{WagonRepairModel.repair_kind}}</th>
                                            <th>{{WagonRepairModel.next_planed_repair_date}}</th>
                                            <th>{{WagonRepairModel.next_planed_repair_depot}}</th>
                                            <th>{{WagonRepairModel.status}}</th>
                                            <th>{{WagonRepairModel.repair_station_downtime}}</th>
                                            <th>{{WagonRepairModel.malfunction_code}}</th>
                                            <th>{{WagonRepairModel.malfunction_kind}}</th>
                                            <th>{{WagonRepairModel.repair_compensation}}</th>
                                        </tr>
                                       </thead>
                                       <tbody>
                                        <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>{{WagonRepairModel.nrp}}</td>
                                            <td>{{WagonRepairModel.malfunction_current}}</td>
                                            <td>{{WagonRepairModel.repair_type}}</td>
                                            <td>{{WagonRepairModel.nrp_date}}</td>
                                            <td>{{WagonRepairModel.repair_kind}}</td>
                                            <td>{{WagonRepairModel.next_planed_repair_date}}</td>
                                            <td>{{WagonRepairModel.next_planed_repair_depot}}</td>
                                            <td>{{WagonRepairModel.status}}</td>
                                            <td>{{WagonRepairModel.repair_station_downtime}}</td>
                                            <td>{{WagonRepairModel.malfunction_code}}</td>
                                            <td>{{WagonRepairModel.malfunction_kind}}</td>
                                            <td>{{WagonRepairModel.repair_compensation}}</td>

                                        </tr>
                                       </tbody>
                                </table> 
                                </div>                                    
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Остаточный пробег">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                        <thead>
                                            <tr>
                                                <th>{{WagonModel.number}}</th>
                                                <th>{{WagonRestRunModel.actual_run}}</th>
                                                <th>{{WagonRestRunModel.rest_run}}</th>
                                                <th>{{WagonRestRunModel.run_limit}}</th>
                                                <th>{{WagonRestRunModel.run_over_limit}}</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{WagonModel.number}}</td>
                                                <td>{{WagonRestRunModel.actual_run}}</td>
                                                <td>{{WagonRestRunModel.rest_run}}</td>
                                                <td>{{WagonRestRunModel.run_limit}}</td>
                                                <td>{{WagonRestRunModel.run_over_limit}}</td>

                                            </tr>
                                        </tbody>
                                    </table>  
                                </div>                                   
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Модернизация">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                      <thead>
                                        <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonModernisationModel.last_date}}</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>{{WagonModernisationModel.last_date}}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                </div>                                   
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Аренда">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                       <thead>
                                        <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonRentModel.rent_doc}}</th>
                                            <th>{{WagonRentModel.rent_doc_counterparty}}</th>
                                            <th>{{WagonRentModel.acceptance_certificate_number}}</th>
                                            <th>{{WagonRentModel.acceptance_certificate_date}}</th>
                                            <th>{{WagonRentModel.acceptance_station}}</th>

                                        </tr>
                                       </thead>
                                       <tbody>
                                        <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>{{WagonRentModel.rent_doc}}</td>
                                            <td>{{WagonRentModel.rent_doc_counterparty}}</td>
                                            <td>{{WagonRentModel.acceptance_certificate_number}}</td>
                                            <td>{{WagonRentModel.acceptance_certificate_date}}</td>
                                            <td>{{WagonRentModel.acceptance_station}}</td>

                                        </tr>
                                       </tbody>
                                    </table>    
                                </div>                                 
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Лизинг">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                       <thead>
                                        <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonLeasingModel.leasing_doc}}</th>
                                            <th>{{WagonLeasingModel.leasing_doc_lifetime}}</th>

                                        </tr>
                                       </thead>
                                       <tbody>
                                        <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>{{WagonLeasingModel.leasing_doc}}</td>
                                            <td>{{WagonLeasingModel.leasing_doc_lifetime}}</td>
                                        </tr>
                                       </tbody>
                                    </table>  
                                </div>                                   
                                </b-card-text>
                        </b-tab>
                        <b-tab title="Страхование">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                       <thead>
                                        <tr>
                                            <th>{{WagonModel.number}}</th>
                                            <th>{{WagonInsuranceModel.insurance_doc}}</th>
                                            <th>{{WagonInsuranceModel.insurance_doc_lifetime}}</th>
                                        </tr>
                                       </thead>
                                       <tbody>
                                        <tr>
                                            <td>{{WagonModel.number}}</td>
                                            <td>{{WagonInsuranceModel.insurance_doc}}</td>
                                            <td>{{WagonInsuranceModel.insurance_doc_lifetime}}</td>
                                        </tr>
                                       </tbody>
                                    </table>  
                                </div>                                   
                                </b-card-text>
                        </b-tab>
                        <b-tab title="ЭТРАН">
                            <b-card-text style="margin-top: -30px;">
                                <div style="width:100%; overflow: auto;">
                                <table>
                                        <thead>
                                            <tr>
                                                <th>{{WagonModel.number}}</th>
                                                <th>{{WagonEtranInfoModel.owner}}</th>
                                                <th>{{WagonEtranInfoModel.tenant}}</th>
                                                <th>{{WagonEtranInfoModel.signing}}</th>
                                                <th>{{WagonEtranInfoModel.parking}}</th>
                                                <th>{{WagonEtranInfoModel.telegram_number}}</th>
                                                <th>{{WagonEtranInfoModel.number_from_expeditor}}</th>
                                              

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{WagonModel.number}}</td>
                                                <td>{{WagonEtranInfoModel.owner}}</td>
                                                <td>{{WagonEtranInfoModel.tenant}}</td>
                                                <td>{{WagonEtranInfoModel.signing}}</td>
                                                <td>{{WagonEtranInfoModel.parking}}</td>
                                                <td>{{WagonEtranInfoModel.telegram_number}}</td>
                                                <td>{{WagonEtranInfoModel.number_from_expeditor}}</td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>                                    
                                </b-card-text>
                        </b-tab>
                    </b-tabs>
                    </b-card>
    </div>
</div>
</template>
    
    
    
<script>
export default{
    name: 'WagonTable',
    data(){
        return{
            WagonModel:{
                number: 'Номер вагона',
                is_problem : 'Проблемность',
                features : 'Особенности модели вагона',
                volume: 'Объем вагона',
                tare: 'Тара вагона',
                type: 'Тип вагона'
            },
            WagonStateModel:{
                state: 'Состояние',
                state_value: 'Значение "Состояние"',
                state_value_digital: 'Значение "Состояние" числовое',
                updated_at: "Дата изменения состояния"
            },
            WagonTypeModel:{
                name: 'Наименование',
                short_name: 'Краткое наименование',
                in_use: 'Используется',
                name_rp: 'Наименование в р.п.',
                foot_length: 'Футовость контейнера',
                code_ustng_empty: 'Код УСТНГ для порожнего',
                code_gng_empty: 'Код ГНГ для порожнего',
                code_etsng_empty_repair: 'Код ЕСТНГ для порожнего в ремонте',
                trf_code: 'Код типа п.с. в Рейл-Тариф',
                rtf_equal_container_code: 'Код экв. типа кнт. в Рейл-Тариф'
            },
            WagonPassportModel:{
                next_planed_repair_date: 'Дата следующего планового ремонта',
                last_planed_repair_date: 'Дата последнего планового ремонта',
                capacity: 'Грузоподъемность',
                model: 'Модель вагона',
                days_before_date_plan_repair: 'Дней до следующего планового ремонта',
                verbose_name: 'Статус проблемы по наступлению срока ремонта, используются для раскраски',
                next_plan_repair_kind: 'Вид следующего планового ремонта',
                build_date: 'Дата постройки', 
                lifetime: 'Срок службы',
                tenant_code_abd: 'Код арендатора по АБД ПВ',
                owner_code_abd: 'Код собственника по АБД ПВ'

            },
            WagonBelongModel:{
                name: 'Принадлежность',
                owner: 'Собственник',
                tenant: 'Арендатор',
                in_company_control: 'В управлении',
                wagon_source_company: 'Источник поступления вагона, организация',
                owner_okpo: 'Собственник, ОКПО',
                tenant_okpo: 'Арендатор, ОКПО'
            },
            WagonRepairModel:{
                nrp: 'НРП (вагон в нерабочем парке)',
                malfunction_current: 'Неисправность текущая',
                repair_type: 'Тип ремонта (для НРП)',
                nrp_date: 'Дата НРП (перевода в нерабочий парк)',
                REPAIR_TYPES: [
                    ('Текущий', 'current'),
                    ('Плановый', 'plan')
                ],
                repair_kind: 'Текущий/Плановый',
                next_planed_repair_date: 'Дата следующего запланированного ремонта',
                next_planed_repair_depot: 'Депо следующего запланированного ремонта',
                status: 'Статус ремонта',
                repair_station_downtime: 'Простой на станции рмонта (дни)',
                malfunction_code: 'Код неисправности (НРП)',
                malfunction_kind: 'Вид неисправности (НРП)',
                repair_compensation: 'Ремонт возмещается (текущий)'

            },
            WagonRestRunModel:{
                actual_run: 'Фактический пробег',
                rest_run: 'Остаточный пробег',
                run_limit: 'Лимит пробега',
                run_over_limit: 'Пробег свыше лимита'
            },
            WagonModernisationModel:{
                last_date: 'Дата последней модернизации'
            },
            WagonRentModel:{
                rent_doc: 'Договор аренды',
                rent_doc_counterparty: 'Контрагент по договору',
                acceptance_certificate_number: 'Номер акта приема-передачи',
                acceptance_certificate_date: 'Дата акта приема-передачи',
                acceptance_station: 'Станция приема-передачи'

            },
            WagonLeasingModel:{
                leasing_doc: 'Договор лизинга',
                leasing_doc_lifetime: 'Срок действия договора лизинга',

            },
            WagonInsuranceModel:{
                insurance_doc: 'Договор страхования',
                insurance_doc_lifetime: 'Срок действия договора страхования'
            },
           WagonEtranInfoModel:{
            owner: 'Собственник (по данным ЭТРАН, ГВЦ)',
            tenant: 'Арендатор (по данным ЭТРАН, ГВЦ)',
            signing: 'Визирование',
            parking: 'Отстой',
            telegram_number: '№ телеграммы',
            number_from_expeditor: '№ от экспедитора'

           },
           WagonsModel:[],
           WagonsTypeModel: [],
           WagonsPassportModel: [],
           WagonsBelongModel: [],
           WagonsRepairModel: [],
           WagonsRestRunModel: [],
           WagonsModernisationModel: [],
           WagonsRentModel: [],
           WagonsLeasingModel: [],
           WagonsInsuranceModel: [],
           WagonsEtranInfoModel: []

        }
    },
     async mounted(){
        const res = await fetch('C:/Users/a.reshetilo/Desktop/WagonsModel.txt')
        const WagonsModel = await res.json();
        this.WagonsModel = WagonsModel
        
       }
    }

    
</script>
    
<style>
#tableMain{
    background: rgb(236, 236, 236);
    
    }
tr,td,th{
    font-size: 12px;
    border: 1px solid rgb(184, 184, 184);
    background: white;
    text-align: center;
    padding: 5px 10px;
}
.info-table{
    margin-top: 66px;
    width: 50vw;
}
th{
    background: #c04945;
    border: 1px solid black;
    color: white;
}

.table1 table {
  /* width: 35% !important; */
  border-spacing: 0 !important;
  margin-top: 3%;
}
.table1 table thead tr th {
  text-align: left !important;
  border-bottom: solid 3px #c04945 !important;
  padding: 8px !important;
  font-size: small;
  background-color: #eee !important;
  color: #000000 !important;
}
.table1 table tbody tr td {
  transition: all 0.15s ease !important;
  padding: 8px !important;
}
.table1 table tbody td span {
  font-size: x-small;
  display: block;
}
.table1 table tbody td span:first-child {
  font-size: small;
  line-height: 1.5em;
  display: block;
}
.table1 table tbody tr:hover {
  background-color: #eee !important;
  outline: solid 1px #c04945  !important;
}
.table1 table th,
.table1 table td:not(.wrap) {
  white-space: nowrap !important;
}
    </style>
    