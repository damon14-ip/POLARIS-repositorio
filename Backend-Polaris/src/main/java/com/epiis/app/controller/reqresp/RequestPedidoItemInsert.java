package com.epiis.app.controller.reqresp;

import com.epiis.app.dto.DtoPedidoItem;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestPedidoItemInsert {
    @Getter
    @Setter
    public static class Dto {
        private DtoPedidoItem pedidoItem;
    }

    private Dto dto = new Dto();
}
