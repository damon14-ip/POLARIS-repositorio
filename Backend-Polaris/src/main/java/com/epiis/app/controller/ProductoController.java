package com.epiis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.app.business.ProductoBusiness;
import com.epiis.app.controller.reqresp.RequestProductoInsert;
import com.epiis.app.controller.reqresp.ResponseProductoInsert;
import com.epiis.app.dto.DtoProducto;

@RestController
@RequestMapping(path = "producto")
public class ProductoController {

    @Autowired
    private ProductoBusiness productoBusiness;

    @PostMapping(path = "insert", consumes = "application/json")
    public ResponseEntity<ResponseProductoInsert> insert(@RequestBody RequestProductoInsert request) {
        ResponseProductoInsert response = new ResponseProductoInsert();
        productoBusiness.insert(request.getDto().getProducto());
        response.success();
        response.getListMessage().add("Producto registrado correctamente");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "getall")
    public ResponseEntity<List<DtoProducto>> getAll() {
        return new ResponseEntity<>(productoBusiness.getAll(), HttpStatus.OK);
    }
}
