package org.example.resources;


import jakarta.ws.rs.*;

import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.example.entities.Noticia;
import org.example.entities.Usuario;
import org.example.repositories.NoticiaRepository;
import org.example.services.NoticiaService;


@Path("noticia")
public class NoticiaResource {

    public NoticiaRepository noticiaRepository;
    public NoticiaService noticiaService;


    public NoticiaResource() {
        noticiaRepository = new NoticiaRepository();
        noticiaService = new NoticiaService();
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(
            @QueryParam("orderby") String orderBy,
            @QueryParam("direction") String direction,
            @QueryParam("limit") int limit,
            @QueryParam("offset") int offset,
            @QueryParam("EmailNoticia") String EmailNoticia




    ) {
        return Response.ok(noticiaService.getAll(EmailNoticia,
                orderBy, direction, limit, offset)).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id){
        var noticia = noticiaRepository.get(id);
        return noticia.isPresent() ?
                Response.ok(noticia.get()).build() :
                Response.status(Response.Status.NOT_FOUND).build();
    }
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(Noticia noticia){
        try{
            noticiaService.create(noticia);
            return Response.status(Response.Status.CREATED).build();
        }
        catch(IllegalArgumentException e){
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }





}
