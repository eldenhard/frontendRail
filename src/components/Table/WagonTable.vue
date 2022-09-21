<template>
<div id="tableMain">
    <div class="table1" style="display: flex;">
    <table style="margin-top: -0.1px;">
      <thead>
        <tr>
          <th>{{WagonModel.number}}</th>
          <th> {{WagonModel.is_problem}}</th>
          <th>{{WagonModel.volume}}</th>
          <th>{{WagonModel.type}}</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for="wagon in WagonsModel" :key="wagon.id" -->
        <tr v-for="wagon in WagonsModel" :key="wagon.id">
          <td>{{wagon.number}}</td>
          <td>{{wagon}}</td>
          <td></td>
          <td>{{}}</td>
          <td></td>
          <td></td>
          
       </tr>

       
      </tbody>
    </table>
<b-card no-body style="background: #ECECEC; border: none; text-decoration: none; width: 100%;">
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
                            <tr v-for="wagontype in WagonStatesModel" :key="wagontype.id">
                            <td>{{wagontype.number}}</td>
                            <td>{{wagontype.state}}</td>
                            <td>{{wagontype.state_value}}</td>
                            <td>{{wagontype.state_value_digital}}</td>
                            <td>{{wagontype.updated_at}}</td>

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
                            <tr v-for=" wagon in WagonsTypeModel" :key="wagon.id">
                                <td>{{wagon.number}}</td>
                                <td>{{wagon.name}}</td>
                                <td>{{wagon.short_name}}</td>
                                <td>{{WagonTypeModel.in_use}}</td>
                                <td class="wrap">{{wagon.name_rp}}</td>
                                <td>{{wagon.foot_length}}</td>
                                <td>{{wagon.code_ustng_empty}}</td>
                                <td>{{wagon.code_gng_empty}}</td>
                                <td>{{wagon.code_etsng_empty_repair}}</td>
                                <td>{{wagon.trf_code}}</td>
                                <td>{{wagon.rtf_equal_container_code}}</td>
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
                        <tr v-for="wagon in WagonsPassportModel" :key="wagon.id">
                            <td>{{wagon.next_planed_repair_date}}</td>
                            <td>{{wagon.last_planed_repair_date}}</td>
                            <td>{{wagon.capacity}}</td>
                            <td>{{wagon.model}}</td>
                            <td>{{wagon.days_before_date_plan_repair}}</td>
                            <td>{{wagon.verbose_name}}</td>
                            <td>{{wagon.next_plan_repair_kind}}</td>
                            <td>{{wagon.build_date}}</td>
                            <td>{{wagon.lifetime}}</td>
                            <td>{{wagon.tenant_code_abd}}</td>
                            <td>{{wagon.owner_code_abd}}</td>
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
                        <tr v-for="wagon in WagonsBelongModel" :key="wagon.id">
                            <td>{{wagon.number}}</td>
                            <td>{{wagon.name}}</td>
                            <td>{{wagon.owner}}</td>
                            <td>{{wagon.tenant}}</td>
                            <td>{{wagon.in_company_control}}</td>
                            <td>{{wagon.wagon_source_company}}</td>
                            <td>{{wagon.owner_okpo}}</td>
                            <td>{{wagon.tenant_okpo}}</td>

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
                            <tr v-for="wagon in WagonsRestRunModel" :key="wagon.id">
                                <td>{{wagon.number}}</td>
                                <td>{{wagon.actual_run}}</td>
                                <td>{{wagon.rest_run}}</td>
                                <td>{{wagon.run_limit}}</td>
                                <td>{{wagon.run_over_limit}}</td>

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
                        <tr v-for="wagon in WagonsModernisationModel" :key="wagon.id">
                            <td>{{wagon.number}}</td>
                            <td>{{wagon.last_date}}</td>
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
                        <tr v-for="wagon in WagonsRentModel" :key="wagon.id">
                            <td>{{wagon.number}}</td>
                            <td>{{wagon.rent_doc}}</td>
                            <td>{{wagon.rent_doc_counterparty}}</td>
                            <td>{{wagon.acceptance_certificate_number}}</td>
                            <td>{{wagon.acceptance_certificate_date}}</td>
                            <td>{{wagon.acceptance_station}}</td>

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
                        <tr v-for="wagon in WagonsLeasingModel" :key="wagon.id">
                            <td>{{wagon.number}}</td>
                            <td>{{wagon.leasing_doc}}</td>
                            <td>{{wagon.leasing_doc_lifetime}}</td>
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
                        <tr v-for="wagon in WagonsInsuranceModel" :key="wagon.id">
                            <td>{{wagon.number}}</td>
                            <td>{{wagon.insurance_doc}}</td>
                            <td>{{wagon.insurance_doc_lifetime}}</td>
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
                            <tr v-for="wagon in WagonsEtranInfoModel" :key="wagon.id">
                                <td>{{wagon.number}}</td>
                                <td>{{wagon.owner}}</td>
                                <td>{{wagon.tenant}}</td>
                                <td>{{wagon.signing}}</td>
                                <td>{{wagon.parking}}</td>
                                <td>{{wagon.telegram_number}}</td>
                                <td>{{wagon.number_from_expeditor}}</td>
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
                volume: 'Объем вагона',
                type: 'Тип вагона'
            },
            WagonStateModel:{
                number: 'Номер вагона',
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

           WagonStatesModel: [
           {
            'number': 1,
            'state': 'Плохое',
            'state_value': '12',
            'state_value_digital': '12',
            'updated_at': Date.now()
           },
           {
           'number': 2,
            'state': 'Хорошее',
            'state_value': '2',
            'state_value_digital': '17',
            'updated_at': Date.now()
           }
           ],
           WagonsTypeModel: [
           {
            'number': 1,
            'name': 'Вагон',
            'short_name': 'Ква',
            'in_use': 'Используется',
            'name_rp': 'РАП',
            'foot_length': '20',
            'code_ustng_empty': '9909',
            'code_gng_empty': '68',
            'code_etsng_empty_repair': '02',
            'trf_code': '89899',
            'rtf_equal_container_code': '100-001'
           }, {
            'number': 1,
            'name': 'Вагон',
            'short_name': 'Ква',
            'in_use': 'Используется',
            'name_rp': 'РАП',
            'foot_length': '20',
            'code_ustng_empty': '9909',
            'code_gng_empty': '68',
            'code_etsng_empty_repair': '02',
            'trf_code': '89899',
            'rtf_equal_container_code': '100-001'
           },
           {
            'number': 1,
            'name': 'Вагон',
            'short_name': 'Ква',
            'in_use': 'Используется',
            'name_rp': 'РАП',
            'foot_length': '20',
            'code_ustng_empty': '9909',
            'code_gng_empty': '68',
            'code_etsng_empty_repair': '02',
            'trf_code': '89899',
            'rtf_equal_container_code': '100-001'
           }, {
            'number': 1,
            'name': 'Вагон',
            'short_name': 'Ква',
            'in_use': 'Используется',
            'name_rp': 'РАП',
            'foot_length': '20',
            'code_ustng_empty': '9909',
            'code_gng_empty': '68',
            'code_etsng_empty_repair': '02',
            'trf_code': '89899',
            'rtf_equal_container_code': '100-001'
           }, {
            'number': 1,
            'name': 'Вагон',
            'short_name': 'Ква',
            'in_use': 'Используется',
            'name_rp': 'РАП',
            'foot_length': '20',
            'code_ustng_empty': '9909',
            'code_gng_empty': '68',
            'code_etsng_empty_repair': '02',
            'trf_code': '89899',
            'rtf_equal_container_code': '100-001'
           }
            ],
           WagonsPassportModel: [
            {
            'next_planed_repair_date': '19.10.2020',
            'last_planed_repair_date': '11.02.2015',
            'capacity': '100',
            'model': 'Kexi',
            'days_before_date_plan_repair': '100',
            'verbose_name': '12',
            'next_plan_repair_kind': 'Капитальный',
            'build_date': '9.07.2009', 
            'lifetime': '30 лет',
            'tenant_code_abd': '122',
            'owner_code_abd': '435678'
            },
            {
            'next_planed_repair_date': '19.10.2020',
            'last_planed_repair_date': '11.02.2015',
            'capacity': '100',
            'model': 'Kexi',
            'days_before_date_plan_repair': '100',
            'verbose_name': '12',
            'next_plan_repair_kind': 'Капитальный',
            'build_date': '9.07.2009', 
            'lifetime': '30 лет',
            'tenant_code_abd': '122',
            'owner_code_abd': '435678'
            }
           ],
           WagonsBelongModel: [
            {
            'number': 1,
            'name': 'Принадлежность',
            'owner': 'ТрансТех',
            'tenant': 'ТрансТех',
            'in_company_control': 'В ТрансТех',
            'wagon_source_company': 'Сбер',
            'owner_okpo': '1234567',
            'tenant_okpo': '9876543'
            },
            {
            'number': 2,
            'name': 'Принадлежность',
            'owner': 'ТрансТех',
            'tenant': 'ТрансТех',
            'in_company_control': 'В ТрансТех',
            'wagon_source_company': 'Сбер',
            'owner_okpo': '1234567',
            'tenant_okpo': '9876543'
            }
           ],
           WagonsRepairModel: [],
           WagonsRestRunModel: [
            {
                'number': 1,
                'actual_run': '123',
                'rest_run': '12',
                'run_limit': '10000',
                'run_over_limit': '23'
            },
            {
                'number': 2,
                'actual_run': '123',
                'rest_run': '12',
                'run_limit': '10000',
                'run_over_limit': '23'
            }
           ],
           WagonsModernisationModel: [
            {
                'number': 1,
                'last_date': '20.03.2022'
            }
           ],
           WagonsRentModel: [
            {
                'number': 1,
                'rent_doc': 'Был',
                'rent_doc_counterparty': 'Иванов',
                'acceptance_certificate_number': '1',
                'acceptance_certificate_date': '11.01.2022',
                'acceptance_station': 'Ковров'
            }
           ],
           WagonsLeasingModel: [
            {
                'number': 1,
                'leasing_doc': 'Договор ',
                'leasing_doc_lifetime': '15.02.2023',

            }
           ],
           WagonsInsuranceModel: [{
            'number':1,
            'insurance_doc': 'Договор',
            'insurance_doc_lifetime': '30.02.2023'

           }],
           WagonsEtranInfoModel: [{
            'number': 1,
            'owner': 'Иванов',
            'tenant': 'Петров',
            'signing': 'Визирование +',
            'parking': '-',
            'telegram_number': '123',
            'number_from_expeditor': '321'
           }]

        }
    },
   mounted() {
    
     fetch('http://10.1.5.65/api/wagon-park/wagon/', {
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
                        this.WagonsModel = r.data;
                        console.log(this.WagonsModel)
               })
           }
           else{
               console.log('NOT OK')
           }
       })
    // let wagonsmodel = await lk.json();
    // this.WagonsModel = wagonsmodel
    // console.log(wagonsmodel)
    
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
    