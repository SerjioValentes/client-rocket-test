<template>

  <a-table :pagination="false" :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>
      <div class="table-header">

        <div>
          Тестовое задание
        </div>
        <div>

          <a-input-search
          v-model:value="value"
          placeholder="input search text"
          auto-size
          @change="onSearch"
          />
        </div>
        
      </div>
    </template>
  </a-table>
</template>


<script lang="ts">
import { ref, defineComponent } from 'vue';

const columns = [
  {
    title: 'Название',
    dataIndex: 'namecompany',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
  },
  {
    title: 'Ответственный',
    dataIndex: 'responsibleuser',
  },
  {
    title: 'Дата создания',
    dataIndex: 'dateofcreation',
  },
  {
    title: 'Бюджет',
    dataIndex: 'price',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default defineComponent({
  name: 'Table',
  data(){
    return {
      url_general: 'http://localhost:8080/api/getUsers',
      value: ref<string>(''),
      data,
      leadsData: [],
      columns,
    };
  },
  mounted(){
    this.getLeadsFetch()
  },
  methods: {
    getLeadsFetch(query: string | null = null) {

      let querySearch: null | string  = null

      if(query === null || query === ''){
        querySearch = 'http://localhost:8080/api/getUsers'
      }else {
        querySearch = `http://localhost:8080/api/getUsers?query=${query}`
      }

      this.axios.get(`${querySearch}`)
        .then((response: any) => {
          this.data = response.data
          console.log(response.data)
        });
      },
      onSearch(searchValue: string) {
        if(this.value.length > 3)
          return this.getLeadsFetch(this.value)
      },
  },
});
</script>
<style>
.table-header{
  display: flex;
  justify-content: space-between;
}
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>


