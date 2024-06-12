package org.example.resources;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.example.entities.Usuario;
import org.example.repositories.UsuarioRepository;
import org.example.services.UsuarioService;

    @Path("usuario")
    public class UsuarioResource {


        public UsuarioRepository usuarioRepository;
        public UsuarioService usuarioService;


        public UsuarioResource() {
            usuarioRepository = new UsuarioRepository();
            usuarioService = new UsuarioService();
        }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(
            @QueryParam("orderby") String orderBy,
            @QueryParam("direction") String direction,
            @QueryParam("limit") int limit,
            @QueryParam("offset") int offset,
            @QueryParam("Nome") String Nome,
            @QueryParam("Email") String Email,
            @QueryParam("Senha") String Senha,
            @QueryParam("PontuacaoTotal") int PontuacaoTotal,
            @QueryParam("CEP") String CEP,
            @QueryParam("Localidade") String Localidade,
            @QueryParam("Logradouro") String Logradouro,
            @QueryParam("UF") String UF


    ) {
        return Response.ok(usuarioService.getAll(Nome, Email, Senha, PontuacaoTotal, CEP, Localidade, Logradouro, UF,
                orderBy, direction, limit, offset)).build();
    }

        @GET
        @Path("{id}")
        @Produces(MediaType.APPLICATION_JSON)
        public Response get(@PathParam("id") int id){
            var usuario = usuarioRepository.get(id);
            return usuario.isPresent() ?
                    Response.ok(usuario.get()).build() :
                    Response.status(Response.Status.NOT_FOUND).build();
        }

        @POST
        @Consumes(MediaType.APPLICATION_JSON)
        public Response create(Usuario usuario){
            try{
                usuarioService.create(usuario);
                return Response.status(Response.Status.CREATED).build();
            }
            catch(IllegalArgumentException e){
                return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
            }
        }

        @DELETE
        @Path("{id}")
        public Response delete(@PathParam("id") int id) {
            try {
                usuarioService.delete(id);
                return Response.status(Response.Status.NO_CONTENT).build();
            } catch (IllegalArgumentException e) {
                return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
            }
        }

        @PUT
        @Path("{id}")
        @Consumes(MediaType.APPLICATION_JSON)
        public Response update(@PathParam("id") int id, Usuario usuario){
            try{
                usuarioService.update(id, usuario);
                return Response.status(Response.Status.NO_CONTENT).build();
            }
            catch(IllegalArgumentException e){
                return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
            }
        }

        @POST
        @Path("/login")
        @Consumes(MediaType.APPLICATION_JSON)
        public Response login(@QueryParam("email") String email, @QueryParam("senha") String senha) {
            try {
                Usuario usuario = usuarioService.findByEmailAndPassword(email, senha);
                if (usuario!= null) {
                    return Response.status(Response.Status.OK).entity("{\"success\":true}").build();
                } else {
                    return Response.status(Response.Status.UNAUTHORIZED).entity("{\"success\":false, \"message\":\"Usuário não encontrado\"}").build();
                }
            } catch (Exception e) {
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("{\"success\":false, \"message\":\"Erro interno\"}").build();
            }
        }
    }




