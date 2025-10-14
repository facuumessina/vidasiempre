import React from 'react';
import styles from './TermsAndConditions.module.css';

const TermsAndConditions: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.mainTitle}>Términos y Condiciones</h1>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Aceptación de los Términos</h2>
                <p>Al acceder y utilizar el sitio web de Vida Siempre, usted acepta estar sujeto a estos Términos y Condiciones, a nuestra Política de Privacidad y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, le está prohibido usar o acceder a este sitio.</p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Uso de la Licencia</h2>
                <p>Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Vida Siempre para visualización transitoria personal y no comercial solamente. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no podrá:</p>
                <ul>
                    <li>modificar o copiar los materiales;</li>
                    <li>utilizar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);</li>
                    <li>intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web de Vida Siempre;</li>
                    <li>eliminar cualquier derecho de autor u otras anotaciones de propiedad de los materiales; o</li>
                    <li>transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor.</li>
                </ul>
                <p>Esta licencia terminará automáticamente si usted viola cualquiera de estas restricciones y podrá ser terminada por Vida Siempre en cualquier momento.</p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Limitación de Responsabilidad</h2>
                <p>En ningún caso Vida Siempre o sus proveedores serán responsables de los daños (incluidos, entre otros, los daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surjan del uso o la imposibilidad de usar los materiales en el sitio web de Vida Siempre, incluso si Vida Siempre o un representante autorizado de Vida Siempre ha sido notificado oralmente o por escrito de la posibilidad de tales daños.</p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Revisiones y Erratas</h2>
                <p>Los materiales que aparecen en el sitio web de Vida Siempre podrían incluir errores técnicos, tipográficos o fotográficos. Vida Siempre no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual. Vida Siempre puede realizar cambios en los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, Vida Siempre no se compromete a actualizar los materiales.</p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Enlaces</h2>
                <p>Vida Siempre no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de ningún sitio vinculado. La inclusión de cualquier enlace no implica la aprobación por parte de Vida Siempre del sitio. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.</p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Modificaciones de los Términos de Uso del Sitio</h2>
                <p>Vida Siempre puede revisar estos términos de servicio de su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones.</p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Ley Aplicable</h2>
                <p>Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de [Tu País/Región] y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales de ese estado o ubicación.</p>
            </section>
        </div>
    );
};

export default TermsAndConditions;