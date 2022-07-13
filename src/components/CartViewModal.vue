<template>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title">Detalhes do Pedido</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <div class="cart_items__wrapper">
            <div v-for="(item, index) in items" :key="index"
              class="d-flex mb-2 justify-content-center align-items-center">
              <div>
                <img class="rounded-pill"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Font_Awesome_5_brands_react.svg/512px-Font_Awesome_5_brands_react.svg.png"
                  alt="" width="40" />
              </div>
              <div class="p-2 fw-bold">
                {{ item.qty }}x {{ item.name }}
              </div>
              <button class="btn rounded-circle" v-if="item.qty"  v-on:click="item.qty--">-</button>
              <button class="btn rounded-circle "  v-on:click="item.qty++">+</button>

              <div class="ms-auto fw-bold">${{ item.price }}</div>


            </div>
          </div>

          <div class="cart_meta__wrapper border-top border-bottom py-2">
            <div class="d-flex mb-2 justify-content-center align-items-center">
              <div class="rounded-pill p-3 border">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-cart-plus" viewBox="0 0 16 16">
                  <path
                    d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <div class="p-2">Frete</div>
              <div class="ms-auto fw-bold">Grátis</div>
            </div>

            <div class="d-flex mb-2 justify-content-center align-items-center">
              <div class="rounded-pill p-3 border">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-tag-fill" viewBox="0 0 16 16">
                  <path
                    d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>
              <div class="p-2">Cupom de Desconto</div>
              <div class="ms-auto fw-bold">${{ totalDiscount }}</div>
            </div>
          </div>

          <div class="d-flex mb-2 justify-content-center align-items-center py-2">
            <div class="text-secondary">Order Id: 99999</div>
            <div class="ms-auto fw-bold">
              <h4>${{ total }}</h4>
            </div>
          </div>
        </div>

        <div class="modal-footer d-flex m-auto border-0">
          <button type="button" class="btn btn-danger px-5" data-bs-dismiss="modal">
            Ok
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    items: {
      required: true,
      type: Array,
    },
    total: {
      required: true,
      type: Number,
    },
    totalDiscount: {
      required: true,
      type: Number,
    },
  },
};
</script>
