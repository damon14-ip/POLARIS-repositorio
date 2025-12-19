package com.epiis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.app.business.PedidoItemBusiness;
import com.epiis.app.controller.reqresp.RequestPedidoItemInsert;
import com.epiis.app.controller.reqresp.ResponsePedidoItemInsert;
import com.epiis.app.dto.DtoPedidoItem;

@RestController
@RequestMapping(path = "pedidoItem")
public class PedidoItemController {

    @Autowired
    private PedidoItemBusiness pedidoItemBusiness;

    @PostMapping(path = "insert", consumes = "application/json")
    public ResponseEntity<ResponsePedidoItemInsert> insert(@RequestBody RequestPedidoItemInsert request) {
        ResponsePedidoItemInsert response = new ResponsePedidoItemInsert();
        pedidoItemBusiness.insert(request.getDto().getPedidoItem());
        response.success();
        response.getListMessage().add("Item del pedido registrado correctamente");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "getall")
    public ResponseEntity<List<DtoPedidoItem>> getAll() {
        return new ResponseEntity<>(pedidoItemBusiness.getAll(), HttpStatus.OK);
    }
}
