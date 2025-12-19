package com.epiis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.app.business.PedidoBusiness;
import com.epiis.app.controller.reqresp.RequestPedidoInsert;
import com.epiis.app.controller.reqresp.ResponsePedidoInsert;
import com.epiis.app.dto.DtoPedido;

@RestController
@RequestMapping(path = "pedido")
public class PedidoController {

    @Autowired
    private PedidoBusiness pedidoBusiness;

    @PostMapping(path = "insert", consumes = "application/json")
    public ResponseEntity<ResponsePedidoInsert> insert(@RequestBody RequestPedidoInsert request) {
        ResponsePedidoInsert response = new ResponsePedidoInsert();
        pedidoBusiness.insert(request.getDto().getPedido());
        response.success();
        response.getListMessage().add("Pedido registrado correctamente");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "getall")
    public ResponseEntity<List<DtoPedido>> getAll() {
        return new ResponseEntity<>(pedidoBusiness.getAll(), HttpStatus.OK);
    }
}
