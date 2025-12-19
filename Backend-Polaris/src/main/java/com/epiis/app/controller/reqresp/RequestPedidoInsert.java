package com.epiis.app.controller.reqresp;

import com.epiis.app.dto.DtoPedido;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestPedidoInsert {
    @Getter
    @Setter
    public static class Dto {
        private DtoPedido pedido;
    }

    private Dto dto = new Dto();
}
