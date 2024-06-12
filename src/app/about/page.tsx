///



const AboutPage = () => {
  return (
        <section className='flex flex-col mt-20 md:flex md:flex-row'>
          <article className="text-pretty w-contain">
            <h3 className='font-semibold text-5xl ml-2 mr-2'>A-tension 
              <span className='md:text-[28px] text-sm text-nowrap'> co.</span>
            </h3>
            <div className="flex flex-col gap-5 ml-2 mr-2 font-medium items-center">
              <p className='mt-10 text-wrap'>Nossa missão é utilizar da tecnologia em prol ao nosso planeta de um forma que permita que todos nós enquanto sociedade faça parte dessa transformação.</p>
              <p>Seguindo um dos objetivos da ODS, queremos gerar a ação para o Consumo e produção responsáveis focado na promoção de recursos e infraestrutura sustentável e acesso a serviços básicos.</p>
            </div>
 
          </article>
          <div className='md:ml-5 md:mr-5 flex flex-col gap-10 py-7 items-center '>
            <div><img src="/logo.png" alt="logo" className="p-7" />
            </div>
          </div>
          
            
        </section>
        
  )
}

export default AboutPage
