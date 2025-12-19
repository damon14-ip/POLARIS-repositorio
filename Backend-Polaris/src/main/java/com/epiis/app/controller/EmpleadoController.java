package com.epiis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.app.business.EmpleadoBusiness;
import com.epiis.app.controller.reqresp.RequestEmpleadoInsert;
import com.epiis.app.controller.reqresp.ResponseEmpleadoInsert;
import com.epiis.app.dto.DtoEmpleado;

@RestController
@RequestMapping(path = "empleado")
public class EmpleadoController {

    @Autowired
    private EmpleadoBusiness empleadoBusiness;

    @PostMapping(path = "insert", consumes = "application/json")
    public ResponseEntity<ResponseEmpleadoInsert> insert(@RequestBody RequestEmpleadoInsert request) {
        ResponseEmpleadoInsert response = new ResponseEmpleadoInsert();
        empleadoBusiness.insert(request.getDto().getEmpleado());
        response.success();
        response.getListMessage().add("Empleado registrado correctamente");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "getall")
    public ResponseEntity<List<DtoEmpleado>> getAll() {
        return new ResponseEntity<>(empleadoBusiness.getAll(), HttpStatus.OK);
    }
}
