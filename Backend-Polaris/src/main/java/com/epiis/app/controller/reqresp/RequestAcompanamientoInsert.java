package com.epiis.app.controller.reqresp;

import com.epiis.app.dto.DtoAcompanamiento;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestAcompanamientoInsert {
    @Getter
    @Setter
    public static class Dto {
        private DtoAcompanamiento acompanamiento;
    }

    private Dto dto = new Dto();
}
