package com.epiis.app.controller.reqresp;

import com.epiis.app.dto.DtoEmpleado;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestEmpleadoInsert {
    @Getter
    @Setter
    public static class Dto {
        private DtoEmpleado empleado;
    }

    private Dto dto = new Dto();
}
