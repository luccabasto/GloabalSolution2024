package org.example.resources;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.example.entities.Avaliacao;
import org.example.repositories.AvaliacaoRepository;
import org.example.services.AvaliacaoService;

@Path("avaliacao")
public class AvaliacaoResource {

    public AvaliacaoRepository avaliacaoRepository;
    public AvaliacaoService avaliacaoService;

    public AvaliacaoResource() {
        avaliacaoRepository = new AvaliacaoRepository();
        avaliacaoService = new AvaliacaoService();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(
            @QueryParam("nota") int nota,
            @QueryParam("comentario") String comentario,
            @QueryParam("orderby") String orderBy,
            @QueryParam("direction") String direction,
            @QueryParam("limit") int limit,
            @QueryParam("offset") int offset
    ) {
        return Response.ok(avaliacaoService.getAll(nota, comentario, orderBy, direction, limit, offset)).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) {
        var avaliacao = avaliacaoRepository.get(id);
        return avaliacao.isPresent() ?
                Response.ok(avaliacao.get()).build() :
                Response.status(Response.Status.NOT_FOUND).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(Avaliacao avaliacao) {
        try {
            avaliacaoService.create(avaliacao);
            return Response.status(Response.Status.CREATED).build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    @DELETE
    @Path("{id}")
    public Response delete(@PathParam("id") int id) {
        try {
            avaliacaoService.delete(id);
            return Response.status(Response.Status.NO_CONTENT).build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(@PathParam("id") int id, Avaliacao avaliacao) {
        try {
            avaliacaoService.update(id, avaliacao);
            return Response.status(Response.Status.NO_CONTENT).build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }
}

