package org.example.resources;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.example.entities.MaterialReciclavel;
import org.example.repositories.MaterialReciclavelRepository;
import org.example.services.MaterialReciclavelService;

@Path("materialreciclavel")
public class MaterialReciclavelResource {

    public MaterialReciclavelRepository materialReciclavelRepository;
    public MaterialReciclavelService materialReciclavelService;

    public MaterialReciclavelResource() {
        materialReciclavelRepository = new MaterialReciclavelRepository();
        materialReciclavelService = new MaterialReciclavelService();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(
            @QueryParam("orderby") String orderBy,
            @QueryParam("direction") String direction,
            @QueryParam("limit") int limit,
            @QueryParam("offset") int offset,
            @QueryParam("TipoMaterial") String TipoMaterial,
            @QueryParam("CorLixo") String CorLixo
    ) {
        return Response.ok(materialReciclavelService.getAll(TipoMaterial, CorLixo, orderBy, direction, limit, offset)).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) {
        var material = materialReciclavelRepository.get(id);
        return material.isPresent() ?
                Response.ok(material.get()).build() :
                Response.status(Response.Status.NOT_FOUND).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(MaterialReciclavel material) {
        try {
            materialReciclavelService.create(material);
            return Response.status(Response.Status.CREATED).build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    @DELETE
    @Path("{id}")
    public Response delete(@PathParam("id") int id) {
        try {
            materialReciclavelService.delete(id);
            return Response.status(Response.Status.NO_CONTENT).build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(@PathParam("id") int id, MaterialReciclavel material) {
        try {
            materialReciclavelService.update(id, material);
            return Response.status(Response.Status.NO_CONTENT).build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }
}
