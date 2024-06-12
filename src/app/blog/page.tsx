///

const BlogPage = ()=>{
    return(
        <section className='flex flex-col mt-20 md:flex md:flex-row'>
          <article className="text-pretty w-contain">
            <h3 className='font-semibold text-2xl ml-2 mr-2'>Me conte mais sobre a NatuCoin
            </h3>
            <div className="flex flex-col gap-5 ml-2 mr-2 font-medium items-center">
              <p className='mt-10 text-wrap'>Estamos lançando um programa de recompensas por reciclagem de produtos. Cada vez que você recicla, ganha pontos em nossa plataforma (dentro da sua conta). Ao atingir uma determinada quantidade de pontos, você pode trocá-los por um cupom que oferece descontos em determinados mercados, como o Pão de Açúcar.</p>
              <p>Planejamos implementar lixeiras inteligentes em pontos de coleta nesses mercados. As lixeiras contarão com um leitor de QR code e uma câmera. Ao descartar um item, como uma lata de refrigerante, basta escanear o QR code no recipiente. A câmera verificará se o item foi corretamente reciclado, garantindo que os produtos sejam descartados no compartimento apropriado.</p>
            </div>
 
          </article>
          <div className='videos md:ml-5 md:mr-5 flex flex-col gap-10 py-7 items-center '>
            <div><iframe className='md:w-[560px] md:h-[315px] w-[250px] h-[150px]' src="https://www.youtube.com/embed/v5noqR7CKZU?si=iaBR0VRfgeFiQ_cV" title="Video pitch" allow="accelerometer; autoplay; clipboard-write; encrypted-media" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
          
            
        </section>

    )
}

export default BlogPage