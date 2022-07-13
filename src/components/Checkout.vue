<template>
  <div class="checkout__wrapper container">
    <div class="row bg-black pb-4">
      <div class="col-12 d-flex pt-3">
        <img class="rounded-pill" src="https://www.bempaggo.com.br/wp-content/uploads/2020/11/logo-rodape-300x50.png" width="200" heightalt="" />
        <div
          class="ms-auto fw-bold text-danger cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Ver Detalhes do Pedido
        </div>
      </div>

      <div class="col-12 d-flex pt-3">
        <div class="text-white">Loja BemPaggo</div>
        <div class="ms-auto fw-bold">
          <h5 class="text-white">$ {{ total }}</h5>
        </div>
      </div>
    </div>
    <div class="row p-2 bg-white">
      <div class="col-12 p-0 text-uppercase">Informações Adicionais</div>
      <div
        class="col-12 p-0 border border-bottom-0 border-rounded-top-80 d-flex"
      >
        <vue-country-code
          class="border-0 px-2"
          onSelect="onSelect"
          :preferredCountries="['br', 'us', 'gb']"
        >
        </vue-country-code>

        <input
          v-model="order.phone"
          type="number"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="phone"
          placeholder="Telefone"
          name="phone"
        />
      </div>
      <div class="col-6 p-0 border border-end-0">
        <input
          v-model="order.first_name"
          type="text"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="first_name"
          placeholder="Primeiro Nome"
          name="first_name"
        />
      </div>
      <div class="col-6 p-0 border">
        <input
          v-model="order.last_name"
          type="text"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="last_name"
          placeholder="Sobrenome"
          name="last_name"
        />
      </div>
      <div class="col-12 p-0 border border-rounded-bottom-80">
        <input
          v-model="order.email"
          type="email"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="email"
          placeholder="Email"
          name="email"
        />
      </div>
    </div>

    <div class="row p-2">
      <div
        class="col-12 p-0 border border-rounded-top-80 border-rounded-bottom-80 d-flex"
      >
        <input
          v-model="order.information"
          type="text"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="information"
          placeholder="Observações"
          name="information"
        />
      </div>
    </div>

    <div class="row mb-3 p-2">
      <div class="col-12 p-0 text-uppercase">Método de Pagamento</div>

      <div class="col-12 p-0">
        <select
          v-model="order.payment_mode"
          class="form-select p-2 px-3 border-rounded-top-80 border-rounded-bottom-80"
        >
          <option value="Card">💳 Cartão</option>
          <option value="PayNow">🧾 Boleto</option>
          <option value="Pix">❖ Pix</option>
        </select>
      </div>
    </div>

    <div class="row mb-3 p-2" v-if="order.payment_mode == 'Card'">
      <div class="col-12 p-0 border border-bottom-0 border-rounded-top-80">
        <input
          v-model="order.card.number"
          type="number"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="card_number"
          placeholder="Número do Cartão"
          name="card_number"
        />
      </div>
      <div class="col-6 p-0 border border-end-0 border-rounded-bottom-left-80">
        <input
          v-model="order.card.expiry_date"
          type="text"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="expiry_date"
          placeholder="Vencimento do Cartão"
          name="expiry_date"
        />
      </div>
      <div class="col-6 p-0 border border-rounded-bottom-right-80">
        <input
          v-model="order.card.cvv"
          type="text"
          class="form-control shadow-none rounded-pill py-3 border-0"
          id="cvv"
          placeholder="CVV"
          name="cvv"
        />
      </div>
    </div>

    <div class="d-grid mb-2">
      <button
        class="btn shadow-sm btn-dark btn-block p-3 text-uppercase text-white-50 border-rounded-top-80 border-rounded-bottom-80"
      >
        Realizar Pagamento
        <svg
          fill="#901643"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </button>
    </div>

    <CartViewModal
      :total="total"
      :totalDiscount="totalDiscount"
      :items="order.items"
    />
  </div>
</template>

<script>
import CartViewModal from "./CartViewModal.vue";
export default {
  name: "Checkout",
  components: {
    CartViewModal,
  },
  data() {
    return {
      order: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        information: "",
        payment_mode: "Card",
        card: {
          number: "",
          expiry_date: "",
          cvv: "",
        },
        items: [
          {
            id: 1,
            name: "React",
            mrp: 218,
            price: 200,
            qty: 1,
          },
          { id: 2, name: "React Native", mrp: 118, price: 100, qty: 2 },
          {
            id: 3,
            name: "NextJs",
            mrp: 213,
            price: 190,
            qty: 1,
          },
        ],
      },
    };
  },

computed: {

    total: function () {
      return this.order.items.reduce((total, item) => {
        return total + item.price * item.qty ;
      }, 0);
    },
    totalDiscount: function () {
      return this.order.items.reduce((total, item) => {
        return total + (item.mrp - item.price);
      }, 0);
    },
  },
};
</script>





