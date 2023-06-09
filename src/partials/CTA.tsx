import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Suscríbete al <GradientText>Newsletters</GradientText>
        </>
      }
      description="Puedes recibir todas las noticias directamente a tu casilla de correo, solo completa el formulario y estarás en la lista."
    />
  </Section>
);

export { CTA };
