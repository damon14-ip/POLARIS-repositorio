package com.epiis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.app.business.ProductoAcompanamientoBusiness;
import com.epiis.app.controller.reqresp.RequestProductoAcompanamientoInsert;
import com.epiis.app.controller.reqresp.ResponseProductoAcompanamientoInsert;
import com.epiis.app.dto.DtoProductoAcompanamiento;

@RestController
@RequestMapping(path = "productoAcompanamiento")
public class ProductoAcompanamientoController {

    @Autowired
    private ProductoAcompanamientoBusiness paBusiness;

    @PostMapping(path = "insert", consumes = "application/json")
    public ResponseEntity<ResponseProductoAcompanamientoInsert> insert(@RequestBody RequestProductoAcompanamientoInsert request) {
        ResponseProductoAcompanamientoInsert response = new ResponseProductoAcompanamientoInsert();
        paBusiness.insert(request.getDto().getProductoAcompanamiento());
        response.success();
        response.getListMessage().add("Producto-Acompañamiento registrado correctamente");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "getall")
    public ResponseEntity<List<DtoProductoAcompanamiento>> getAll() {
        return new ResponseEntity<>(paBusiness.getAll(), HttpStatus.OK);
    }
}
