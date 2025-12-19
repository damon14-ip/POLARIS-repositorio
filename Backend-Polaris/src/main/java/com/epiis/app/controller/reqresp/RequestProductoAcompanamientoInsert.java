package com.epiis.app.controller.reqresp;

import com.epiis.app.dto.DtoProductoAcompanamiento;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestProductoAcompanamientoInsert {
    @Getter
    @Setter
    public static class Dto {
        private DtoProductoAcompanamiento productoAcompanamiento;
    }

    private Dto dto = new Dto();
}
