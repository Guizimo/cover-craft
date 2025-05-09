import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent p-12 flex flex-col items-center border border-white/[0.08]">
          <h2 className="text-4xl font-medium tracking-[-0.02em] mb-4 text-center">{t('cta.title')}</h2>
          <p className="text-lg text-white/60 max-w-xl text-center mb-8">{t('cta.description')}</p>
          <Link to="/generator">
            <Button size="lg" className="h-12 px-6 bg-white text-black hover:bg-white/90 rounded-lg">
              {t('cta.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
