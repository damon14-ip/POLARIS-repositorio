package com.epiis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.app.business.AcompanamientoBusiness;
import com.epiis.app.controller.reqresp.RequestAcompanamientoInsert;
import com.epiis.app.controller.reqresp.ResponseAcompanamientoInsert;
import com.epiis.app.dto.DtoAcompanamiento;

@RestController
@RequestMapping(path = "acompanamiento")
public class AcompanamientoController {

    @Autowired
    private AcompanamientoBusiness acompanamientoBusiness;

    @PostMapping(path = "insert", consumes = "application/json")
    public ResponseEntity<ResponseAcompanamientoInsert> insert(@RequestBody RequestAcompanamientoInsert request) {
        ResponseAcompanamientoInsert response = new ResponseAcompanamientoInsert();
        acompanamientoBusiness.insert(request.getDto().getAcompanamiento());
        response.success();
        response.getListMessage().add("Acompañamiento registrado correctamente");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "getall")
    public ResponseEntity<List<DtoAcompanamiento>> getAll() {
        return new ResponseEntity<>(acompanamientoBusiness.getAll(), HttpStatus.OK);
    }
}
