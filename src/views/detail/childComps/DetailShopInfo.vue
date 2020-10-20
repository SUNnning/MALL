<template>
  <div :class="$style.shopInfo">
    <div :class="$style.shopTop">
      <img :src="shop.logo">
      <span :class="$style.title">{{shop.name}}</span>
    </div>
    <div :class="$style.shopMiddle">
      <div :class="[$style.shopMiddleItem, $style.shopMiddleLeft]">
        <div :class="$style.infoSells">
          <div :class="$style.sellsCount">
            {{shop.sells | sellCountFilter}}
          </div>
          <div :class="$style.sellsText">总销量</div>
        </div>
        <div :class="$style.infoGoods">
          <div :class="$style.goodsCount">
            {{shop.goodsCount}}
          </div>
          <div :class="$style.goodsText">全部宝贝</div>
        </div>
      </div>
      <div :class="[$style.shopMiddleItem, $style.shopMiddleRight]">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="{[$style.score]:true, [$style.scoreBetter]: item.isBetter}">{{item.score}}</td>
            <!-- <td :class="[$style.score, ]" :class="{'scoreBetter': item.isBetter}">{{item.score}}</td> -->
            <!-- <td :class="[$style.better, ]" :class="{'betterMore': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td> -->
          </tr>
        </table>
      </div>
    </div>
    <div :class="$style.shopBottom">
      <div :class="$style.enterShop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
	}
</script>

<style module>
  .shopInfo {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shopTop {
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }

  .shopTop img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .shopTop .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shopMiddle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shopMiddleItem {
    flex: 1;
  }

  .shopMiddleLeft {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sellsCount, .goodsCount {
    font-size: 18px;
  }

  .sellsText, .goodsText {
    margin-top: 10px;
    font-size: 12px;
  }

  .shopMiddleRight {
    font-size: 13px;
    color: #333;
  }

  .shopMiddleRight table {
    width: 120px;
    margin-left: 30px;
  }

  .shopMiddleRight table td {
    padding: 5px 0;
  }

  .shopMiddleRight .score {
    color: #5ea732;
  }

  .shopMiddleRight .scoreBetter {
    color: #f13e3a;
  }

  .shopMiddleRight .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shopMiddleRight .betterMore span {
    background-color: #f13e3a;
  }

  .shopBottom {
    text-align: center;
    margin-top: 10px;
  }

  .enterShop {
    display: inlineBlock;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
