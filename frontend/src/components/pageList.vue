<template>
  <div class="page-list component-wrap">

    <table class="page-list-table">
      <thead class="page-list__header">
        <tr class="header-row">
          <th>분류</th>
          <th>파일명</th>
          <th>화면 정의</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody class="page-list__body">
        <tr>
          <td class="type-wrap-header" rowspan="3">메인</td>
          <td>
            <a href="" class="page-link">1</a>
          </td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>
            <a href="" class="page-link">1</a>
          </td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>
            <a href="" class="page-link">1</a>
          </td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "pageList",
  data() {
    return {
      data: {
        type: '1',
        // 각 한 줄로 넣고 분류가 같은 값끼리 정리 후 포문?
      }
    };
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/global.scss";

.page-list {
  overflow: hidden;
}

.page-list-table {
  width: 100%;
  font-family: $ptd;
  margin: 40px 0 0;

  th, td {
    vertical-align: middle;
  }

  .page-list__header {

    th {
      color: white;
      padding: 8px 0;
      font-size: $font-regular;
      font-weight: 700;
      background-color: $black;
    }
  }
  .type-wrap-header {
    text-align: center;
    position: relative;
    
    &::after {
      content: "";
      display: block;
      width: 100vw;
      height: 1px;
      background-color: $black;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  tr {

    td {
      padding: 10px 0;

      .page-link {
        color: $black;
        text-decoration: underline;
      }
    }
  }
}
</style>