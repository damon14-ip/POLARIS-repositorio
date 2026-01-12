package com.epiis.app.business;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epiis.app.dataaccess.PedidoRepository;
import com.epiis.app.dataaccess.EmpleadoRepository;
import com.epiis.app.dto.DtoPedido;
import com.epiis.app.entity.Pedido;
import com.epiis.app.entity.Empleado;

@Service
public class PedidoBusiness {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private EmpleadoRepository empleadoRepository;

    public boolean insert(DtoPedido dto) {
        Pedido pedido = new Pedido();

        // Generar UUID
        pedido.setIdPedido(UUID.randomUUID().toString());

        // Buscar empleado
        Empleado empleado = empleadoRepository.findById(dto.getIdEmpleado())
                .orElseThrow(() -> new RuntimeException("Empleado no encontrado"));
        pedido.setEmpleado(empleado);

        pedido.setFechaHoraCreacion(dto.getFechaHoraCreacion());
        pedido.setNombreCliente(dto.getNombreCliente());
        pedido.setEstado(dto.getEstado());
        pedido.setTotalPagar(dto.getTotalPagar());
        pedido.setTipoPedido(dto.getTipoPedido());
        pedido.setMetodoPago(dto.getMetodoPago());

        pedido.setCreatedAt(new Timestamp(new Date().getTime()));
        pedido.setUpdatedAt(new Timestamp(new Date().getTime()));

        pedidoRepository.save(pedido);
        return true;
    }

    public List<DtoPedido> getAll() {
        List<Pedido> pedidos = pedidoRepository.findAll();
        List<DtoPedido> dtos = new ArrayList<>();

        for (Pedido p : pedidos) {
            DtoPedido dto = new DtoPedido();
            dto.setIdPedido(p.getIdPedido());
            dto.setIdEmpleado(p.getEmpleado().getIdEmpleado());
            dto.setFechaHoraCreacion(p.getFechaHoraCreacion());
            dto.setNombreCliente(p.getNombreCliente());
            dto.setEstado(p.getEstado());
            dto.setTotalPagar(p.getTotalPagar());
            dto.setTipoPedido(p.getTipoPedido());
            dto.setMetodoPago(p.getMetodoPago());
            dto.setCreatedAt(p.getCreatedAt());
            dto.setUpdatedAt(p.getUpdatedAt());
            dtos.add(dto);
        }

        return dtos;
    }
}
