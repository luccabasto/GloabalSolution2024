///



const AboutPage = () => {
  return (
        <section className='flex flex-col mt-20 md:flex md:flex-row'>
          <article className="text-pretty w-contain">
            <h3 className='font-semibold text-5xl'>A-tension 
              <span className='md:text-[28px] text-sm text-nowrap'> co.</span></h3>
            <p className='mt-10 text-wrap'>Nossa missão é utilizar da tecnologia em prol ao nosso planeta de um forma que permita que todos nós enquanto sociedade faça parte dessa transformação ||Nossa missão é utilizar da tecnologia em prol ao nosso planeta de um forma que permita que todos nós enquanto sociedade faça parte dessa transformação </p>
          </article>
          <div className='videos flex flex-col gap-10 py-7 '>
            <div><iframe className='md:w-[560px] md:h-[315px] w-[250px] h-[150px]' src="https://www.youtube.com/embed/Q3K0TOvTOno?si=DpqzjEstZRhFgVms" title="Video pitch" allow="accelerometer; autoplay; clipboard-write; encrypted-media" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div><iframe className='md:w-[560px] md:h-[315px] w-[250px] h-[150px]'src="https://www.youtube.com/embed/BY_XwvKogC8?si=HTDzyhxtwwRotu3F" title="Video pitch" allow="accelerometer; autoplay; clipboard-write; encrypted-media" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
          
            
        </section>
        
  )
}

export default AboutPage
