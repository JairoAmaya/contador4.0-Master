window.DB_PROMPTS = [
    // 1. COSTOS Y GESTIÓN
    {
        title: "📊 Costos y Gestión", color: "bg-pink-600", iconName: "PieChart",
        subcategories: [{
            title: "Estratégico",
            prompts: [
                { id: 101, title: "Diseño de Costeo ABC", prompt: "Actúa como experto en Costos. Diseña una estructura preliminar de Costeo Basado en Actividades (ABC) para el área de [Nombre del Área]. Identifica las 5 actividades principales, propón sus 'Cost Drivers' y sugiere cómo asignar los Costos Indirectos de Fabricación (CIF) que suman [Monto Total CIF].", cuandoUsar: "Optimizar asignación", tiempoEstimado: "90 min" },
                { id: 102, title: "Punto de Equilibrio Multiproducto", prompt: "Calcula el punto de equilibrio para una mezcla. Producto A: Precio [Precio A], CV [Costo Var A], Mix [Mix A]%. Producto B: Precio [Precio B], CV [Costo Var B], Mix [Mix B]%. Costos fijos totales: [Costos Fijos]. Genera tabla de sensibilidad.", cuandoUsar: "Planeación utilidades", tiempoEstimado: "60 min" },
                { id: 103, title: "Análisis Variaciones (Estándar vs Real)", prompt: "Analiza la variación de [Monto Variación] en [Materia Prima/MOD]. Estándar: [Costo Estándar], Real: [Costo Real]. Desglosa Variación Precio vs Variación Cantidad y redacta explicación para gerencia.", cuandoUsar: "Control presupuestal", tiempoEstimado: "45 min" },
                { id: 104, title: "Decisión Fabricar o Comprar", prompt: "Analiza si fabricar [Componente] internamente o subcontratar. Costo interno variable: [Costo Var Unitario]. Precio proveedor: [Precio Proveedor]. Costos fijos evitables: [Costos Fijos Evitables]. Volumen: [Unidades].", cuandoUsar: "Estrategia operaciones", tiempoEstimado: "60 min" },
                { id: 105, title: "Teoría de Restricciones (TOC)", prompt: "Determina mezcla óptima. Prod X: Margen [Margen X], Horas Máquina [Horas X]. Prod Y: Margen [Margen Y], Horas Máquina [Horas Y]. Capacidad cuello de botella: [Total Horas] horas.", cuandoUsar: "Maximizar producción", tiempoEstimado: "60 min" },
                { id: 106, title: "Costo Capacidad Ociosa", prompt: "Calcula el costo financiero de capacidad ociosa en planta [Nombre Planta]. Capacidad teórica: [Capacidad Max], Producción real: [Prod Real]. Costos fijos: [Costos Fijos]. Sugiere 3 estrategias de monetización.", cuandoUsar: "Eficiencia activos", tiempoEstimado: "45 min" },
                { id: 107, title: "Target Costing", prompt: "Aplica Target Costing para producto [Nombre]. Precio mercado: [Precio]. Margen deseado: [Margen]%. Calcula costo objetivo máximo y desglosa áreas de reducción.", cuandoUsar: "Lanzamiento productos", tiempoEstimado: "90 min" },
                { id: 108, title: "Margen de Contribución", prompt: "Analiza rentabilidad de línea [Línea]. Ventas: [Ventas]. CV: [Costos Var]. CF Directos: [Costos Fijos]. Calcula Margen de Contribución y Segmento. ¿Eliminar o potenciar?", cuandoUsar: "Análisis portafolio", tiempoEstimado: "45 min" },
                { id: 109, title: "Presupuesto Producción", prompt: "Genera presupuesto producción trimestral [Producto]. Ventas: [Ventas]. Inv Inicial: [Inv Inicial]. Política Inv Final: [Politica]%. Calcula unidades a producir por mes.", cuandoUsar: "Planeación operativa", tiempoEstimado: "60 min" },
                { id: 110, title: "Control de Mermas", prompt: "Analiza reporte mermas [Proceso]. Estándar: [Estándar]%, Real: [Real]%. Costo producción: [Costo]. Calcula impacto económico y checklist de control.", cuandoUsar: "Auditoría calidad", tiempoEstimado: "45 min" }
            ]
        }]
    },
    // 2. PRESUPUESTOS
    {
        title: "💰 Presupuestos", color: "bg-emerald-600", iconName: "TrendingUp",
        subcategories: [{
            title: "Forecasting",
            prompts: [
                { id: 201, title: "Presupuesto Base Cero (ZBB)", prompt: "Guía para ZBB departamento [Depto]. Genera cuestionario para justificar cada partida de gasto y matriz de decisión para priorizar paquetes.", cuandoUsar: "Recortes gastos", tiempoEstimado: "120 min" },
                { id: 202, title: "Rolling Forecast 12 Meses", prompt: "Diseña modelo Rolling Forecast para [Empresa]. Define drivers clave a actualizar mensualmente y cómo proyectar tesorería en alta volatilidad.", cuandoUsar: "Entorno volátil", tiempoEstimado: "90 min" },
                { id: 203, title: "Análisis de Escenarios", prompt: "Crea 3 escenarios (Base, Optimista, Pesimista) para el presupuesto [Año]. Variable crítica: [Variable Clave, ej: Tasa Cambio]. Impacto en EBITDA.", cuandoUsar: "Gestión riesgos", tiempoEstimado: "60 min" },
                { id: 204, title: "Proyección Flujo de Caja", prompt: "Proyecta Cash Flow directo a 13 semanas. Saldo inicial: [Saldo]. Cobros estimados: [Cobros]. Pagos fijos: [Pagos]. Identifica semanas con déficit de caja.", cuandoUsar: "Gestión tesorería", tiempoEstimado: "60 min" },
                { id: 205, title: "CAPEX vs OPEX", prompt: "Evalúa si la adquisición de [Activo/Software] por [Monto] debe ser CAPEX o OPEX bajo NIIF. Analiza impacto en EBITDA y Flujo de Caja.", cuandoUsar: "Decisión inversión", tiempoEstimado: "30 min" },
                { id: 206, title: "Ajuste Inflacionario", prompt: "Ajusta el presupuesto de gastos operativos por inflación proyectada de [Inflación]%. Categorías afectadas: Nómina, Arriendos, Servicios. Calcula nuevo presupuesto.", cuandoUsar: "Entorno inflacionario", tiempoEstimado: "45 min" },
                { id: 207, title: "Presupuesto de Ventas (Estacional)", prompt: "Crea presupuesto de ventas mensual para [Producto] considerando estacionalidad histórica: Q1 [Q1]%, Q2 [Q2]%, Q3 [Q3]%, Q4 [Q4]%. Meta anual: [Meta Anual].", cuandoUsar: "Inicio año comercial", tiempoEstimado: "45 min" },
                { id: 208, title: "Variación Presupuestal Mensual", prompt: "Redacta informe de variación mensual. Real: [Real]. Presupuesto: [Presupuesto]. Explica desviación en [Partida Específica] y plan de acción correctivo.", cuandoUsar: "Cierre mensual", tiempoEstimado: "30 min" },
                { id: 209, title: "Presupuesto de Personal (Headcount)", prompt: "Calcula costo integral de nómina para [Num Empleados] nuevos empleados. Salario base: [Base]. Cargas sociales: [Cargas]%. Beneficios: [Beneficios].", cuandoUsar: "Expansión equipo", tiempoEstimado: "45 min" },
                { id: 210, title: "Alineación KPIs y Presupuesto", prompt: "Define 5 KPIs financieros que deben monitorearse para asegurar el cumplimiento del presupuesto de [Área]. Establece semáforos de alerta.", cuandoUsar: "Control gestión", tiempoEstimado: "60 min" }
            ]
        }]
    },
    // 3. INDUSTRIAL
    {
        title: "🏭 Industrial", color: "bg-slate-600", iconName: "Factory",
        subcategories: [{
            title: "Manufactura",
            prompts: [
                { id: 301, title: "Costeo por Órdenes", prompt: "Estructura hoja de costos para Orden #[Numero]. MP Directa: [MP]. MOD: [Horas] a [Tarifa]. CIF asignado base horas máquina: [Horas Maq] a [Tasa CIF].", cuandoUsar: "Producción a pedido", tiempoEstimado: "60 min" },
                { id: 302, title: "Producción Equivalente", prompt: "Calcula producción equivalente. Unidades terminadas: [Terminadas]. En proceso: [En Proceso] con avance MP [Avance MP]% y Conversión [Avance Conv]%.", cuandoUsar: "Cierre costos proceso", tiempoEstimado: "45 min" },
                { id: 303, title: "Costo de Calidad", prompt: "Calcula Costo de Calidad (COQ). Prevención: [Monto]. Evaluación: [Monto]. Fallas Internas: [Monto]. Fallas Externas: [Monto]. Analiza inversión vs riesgo.", cuandoUsar: "Mejora continua", tiempoEstimado: "60 min" },
                { id: 304, title: "Valoración Inventarios (Promedio)", prompt: "Calcula valor final inventario usando Promedio Ponderado. Saldo inicial: [Cant] a [Costo]. Compra 1: [Cant] a [Costo]. Venta: [Cant].", cuandoUsar: "Kardex", tiempoEstimado: "30 min" },
                { id: 305, title: "Obsolescencia de Inventarios", prompt: "Calcula provisión por obsolescencia (VNR). Item [Item], Costo Libro: [Costo], Precio Venta Estimado: [Precio], Gastos Venta: [Gastos]. Asiento contable.", cuandoUsar: "Cierre anual", tiempoEstimado: "45 min" },
                { id: 306, title: "Costeo de Mantenimiento", prompt: "Analiza si el Dpto de Mantenimiento debe ser centro de costos o utilidad. Presupuesto anual: [Monto]. Horas servicio a producción: [Horas]. Calcula tarifa interna.", cuandoUsar: "Asignación costos", tiempoEstimado: "60 min" },
                { id: 307, title: "Cadena de Suministro (Landed Cost)", prompt: "Calcula costo puesto en bodega (Landed Cost) de importación [Producto]. FOB: [FOB]. Flete: [Flete]. Seguro: [Seguro]. Arancel: [Arancel]%. Gastos puerto: [Gastos].", cuandoUsar: "Importaciones", tiempoEstimado: "45 min" },
                { id: 308, title: "Eficiencia Energética", prompt: "Analiza impacto de alza energética. Costo energía actual: [Costo KWh]. Consumo mensual: [Consumo]. Inversión maquinaria eficiente: [Inversión] ahorro [Ahorro]%. Payback.", cuandoUsar: "Proyectos ahorro", tiempoEstimado: "60 min" },
                { id: 309, title: "Gestión de Desechos", prompt: "Contabilización de venta de subproductos/desechos [Tipo]. Ingreso estimado: [Ingreso]. ¿Se debe deducir del costo de producción o reconocer como otros ingresos?", cuandoUsar: "Venta chatarra", tiempoEstimado: "30 min" },
                { id: 310, title: "Capacidad Instalada Real", prompt: "Calcula OEE (Overall Equipment Effectiveness) de máquina [Nombre]. Disponibilidad: [Disp]%, Rendimiento: [Rend]%, Calidad: [Calidad]%. Interpreta resultado.", cuandoUsar: "Eficiencia planta", tiempoEstimado: "45 min" }
            ]
        }]
    },
    // 4. INMOBILIARIA
    {
        title: "🏢 Inmobiliaria", color: "bg-stone-500", iconName: "Building",
        subcategories: [{
            title: "Real Estate",
            prompts: [
                { id: 401, title: "IFRS 16 Arrendamientos", prompt: "Calcula Activo Derecho Uso y Pasivo Arrendamiento. Canon: [Canon]. Plazo: [Plazo]. Tasa incremental: [Tasa]%. Opción compra: [Si/No]. Tabla amortización.", cuandoUsar: "Nuevo contrato", tiempoEstimado: "60 min" },
                { id: 402, title: "Valor Razonable (NIC 40)", prompt: "Contabiliza ajuste a Valor Razonable propiedad inversión [Dirección]. Valor Libros: [Valor Libros]. Avalúo Nuevo: [Avalúo]. Impacto en Estado Resultados vs ORI.", cuandoUsar: "Cierre fiscal", tiempoEstimado: "45 min" },
                { id: 403, title: "Cap Rate Análisis", prompt: "Calcula Cap Rate de propiedad [Nombre]. NOI (Ingreso Operativo Neto) anual: [NOI]. Valor de mercado propiedad: [Valor]. Compara con mercado [Cap Rate Mercado]%.", cuandoUsar: "Evaluación inversión", tiempoEstimado: "30 min" },
                { id: 404, title: "Cash Flow Inmobiliario", prompt: "Proyecta flujo caja desarrollo inmobiliario [Nombre Proyecto]. Ventas mes a mes: [Cronograma Ventas]. Costos construcción: [Costos]. Tasa descuento: [WACC]%. Calcula VAN y TIR.", cuandoUsar: "Feasibility study", tiempoEstimado: "90 min" },
                { id: 405, title: "Amortización Mejoras (Leasehold)", prompt: "Define política amortización para mejoras en propiedad arrendada [Tipo Mejora]. Valor: [Valor]. Duración contrato: [Años Contrato]. Vida útil mejora: [Vida Útil].", cuandoUsar: "Remodelaciones", tiempoEstimado: "30 min" },
                { id: 406, title: "Rentabilidad por m2", prompt: "Analiza rentabilidad mix inquilinos centro comercial. Local A ([m2] m2, Renta [Renta]). Local B ([m2] m2, Renta [Renta]). Costo operación m2: [Costo Op].", cuandoUsar: "Gestión mall", tiempoEstimado: "45 min" },
                { id: 407, title: "Impuestos Diferidos Propiedades", prompt: "Calcula impuesto diferido por revaluación activo. Base fiscal: [Base Fiscal]. Base contable (Valor Razonable): [Base Contable]. Tasa impositiva: [Tasa]%.", cuandoUsar: "Cierre anual", tiempoEstimado: "60 min" },
                { id: 408, title: "Costos de Vacancia", prompt: "Estima impacto financiero de vacancia en edificio [Nombre]. Tasa vacancia actual: [Tasa]%. Costo oportunidad rentas: [Rentas Perdidas]. Gastos mantenimiento unidades vacías: [Gastos].", cuandoUsar: "Presupuesto anual", tiempoEstimado: "45 min" },
                { id: 409, title: "Administración Propiedades", prompt: "Estructura centro de costos para servicio administración propiedades. Ingresos: % recaudo [Porcentaje]%. Gastos directos personal y software. Punto equilibrio.", cuandoUsar: "Nueva unidad negocio", tiempoEstimado: "60 min" },
                { id: 410, title: "Plusvalía Proyectos", prompt: "Calcula plusvalía esperada terreno [Ubicación] tras cambio uso de suelo. Valor actual: [Valor]. Valor proyectado con permisos: [Valor Futuro]. Costo trámites: [Costos].", cuandoUsar: "Especulación tierras", tiempoEstimado: "45 min" }
            ]
        }]
    },
    // 5. SALUD
    {
        title: "🏥 Sector Salud", color: "bg-cyan-500", iconName: "Activity",
        subcategories: [{
            title: "Hospitalario",
            prompts: [
                { id: 501, title: "Gestión de Glosas", prompt: "Protocolo respuesta glosas aseguradora [Aseguradora]. Motivo: [Motivo Glosa]. Monto: [Monto]. Redacta argumento basado en norma [Normativa] y historia clínica.", cuandoUsar: "Recuperación cartera", tiempoEstimado: "60 min" },
                { id: 502, title: "Costo por Paciente/Cama", prompt: "Calcula costo día cama hospitalización. Costos fijos piso: [Fijos]. Personal enfermería: [Personal]. Ocupación promedio: [Ocupación]%. Insumos variables promedio: [Insumos].", cuandoUsar: "Tarifario", tiempoEstimado: "60 min" },
                { id: 503, title: "Margen por Especialidad", prompt: "Compara rentabilidad Cardiología vs Ortopedia. Ingresos Cardio: [Ingresos C]. Costos Directos Cardio: [Costos C]. Ingresos Orto: [Ingresos O]. Costos Directos Orto: [Costos O].", cuandoUsar: "Estrategia médica", tiempoEstimado: "60 min" },
                { id: 504, title: "Inventario Farmacia", prompt: "Diseña control inventario medicamentos alto costo [Nombre Medicamento]. Rotación actual: [Rotación]. Riesgo vencimiento. Política de stock mínimo y máximo.", cuandoUsar: "Gestión farmacia", tiempoEstimado: "45 min" },
                { id: 505, title: "Activos Fijos Médicos", prompt: "Evalúa vida útil y método depreciación equipo [Equipo, ej: RM]. Costo: [Costo]. Uso intensivo: [Horas/Día]. ¿Depreciación línea recta o unidades producidas?", cuandoUsar: "Activos fijos", tiempoEstimado: "30 min" },
                { id: 506, title: "Recaudo Aseguradoras", prompt: "Analiza antigüedad cartera por pagador. EPS A: [Días Mora]. EPS B: [Días Mora]. Calcula provisión deterioro cartera según NIIF 9 matriz de riesgo.", cuandoUsar: "Cierre financiero", tiempoEstimado: "60 min" },
                { id: 507, title: "Honorarios Médicos", prompt: "Diseña esquema pago variable médicos. Base: [Base]. Variable: [Porcentaje]% sobre procedimientos realizados. Bonificación por satisfacción paciente: [Bono].", cuandoUsar: "Contratación", tiempoEstimado: "45 min" },
                { id: 508, title: "Punto Equilibrio Clínica", prompt: "Calcula PE clínica mensual. Gastos Fijos (Nómina, Arriendo): [Fijos]. Ticket promedio consulta: [Valor]. Margen contribución promedio: [Margen]%.", cuandoUsar: "Planeación", tiempoEstimado: "45 min" },
                { id: 509, title: "Presupuesto Hospitalario", prompt: "Presupuesta ingresos por venta servicios urgencias. Histórico atenciones: [Num Atenciones]. Incremento tarifas: [IPC]%. Tasa ocupación esperada: [Tasa]%.", cuandoUsar: "Presupuesto anual", tiempoEstimado: "60 min" },
                { id: 510, title: "Análisis Estancia Media", prompt: "Analiza impacto financiero de reducir estancia media en [Días] días. Ahorro costos hotelería: [Ahorro Diario]. Incremento capacidad facturación nuevos pacientes.", cuandoUsar: "Eficiencia operativa", tiempoEstimado: "60 min" }
            ]
        }]
    },
    // 6. RETAIL
    {
        title: "🛒 Retail", color: "bg-orange-500", iconName: "ShoppingCart",
        subcategories: [{
            title: "Comercio",
            prompts: [
                { id: 601, title: "GMROI Análisis", prompt: "Calcula GMROI (Retorno Margen Bruto sobre Inversión Inventario) categoría [Categoria]. Margen Bruto: [Margen]. Inventario Promedio Costo: [Inv Prom]. Interpreta resultado.", cuandoUsar: "Evaluación inventario", tiempoEstimado: "30 min" },
                { id: 602, title: "Ventas por m2", prompt: "Compara eficiencia tiendas. Tienda A: Ventas [Ventas A], Área [Area A]. Tienda B: Ventas [Ventas B], Área [Area B]. Identifica tienda más productiva.", cuandoUsar: "Benchmarking tiendas", tiempoEstimado: "30 min" },
                { id: 603, title: "Análisis Markdown", prompt: "Calcula impacto financiero de estrategia liquidación. Inventario obsoleto: [Unidades]. Costo: [Costo]. Precio original: [Precio]. Descuento propuesto: [Descuento]%. Recuperación vs Pérdida.", cuandoUsar: "Liquidación", tiempoEstimado: "45 min" },
                { id: 604, title: "Shrinkage (Pérdida)", prompt: "Contabiliza pérdida inventario (robo/merma). Conteo físico: [Cant Física]. Sistema: [Cant Sistema]. Diferencia: [Diferencia]. Costo unitario: [Costo]. Asiento ajuste.", cuandoUsar: "Toma física", tiempoEstimado: "30 min" },
                { id: 605, title: "Costo Logístico E-commerce", prompt: "Calcula costo total cumplimiento pedido (Fulfillment). Picking/Packing: [Costo P]. Material empaque: [Empaque]. Envío last-mile: [Envío]. Tasa devoluciones: [Tasa]%.", cuandoUsar: "Rentabilidad online", tiempoEstimado: "60 min" },
                { id: 606, title: "Margen por Categoría", prompt: "Analiza P&L categoría [Nombre]. Ventas: [Ventas]. Costo Venta: [CMV]. Rebates proveedores: [Rebates]. Mermas: [Mermas]. Gastos mercadeo directo: [Mercadeo].", cuandoUsar: "Category management", tiempoEstimado: "60 min" },
                { id: 607, title: "Break-even Tienda", prompt: "Punto equilibrio nueva tienda [Ubicación]. Alquiler: [Alquiler]. Personal: [Personal]. Servicios: [Servicios]. Ticket promedio: [Ticket]. Margen promedio: [Margen]%.", cuandoUsar: "Expansión", tiempoEstimado: "45 min" },
                { id: 608, title: "Inventario Fantasma", prompt: "Diseña auditoría para detectar inventario fantasma (sistema dice que hay, estante vacío). Productos críticos: [Lista]. Frecuencia conteos cíclicos.", cuandoUsar: "Control interno", tiempoEstimado: "45 min" },
                { id: 609, title: "Costo Fidelización", prompt: "Calcula pasivo por puntos lealtad no redimidos. Puntos circulantes: [Puntos]. Tasa redención estimada: [Tasa]%. Costo promedio premio: [Costo]. Ajuste IFRS 15.", cuandoUsar: "Cierre contable", tiempoEstimado: "60 min" },
                { id: 610, title: "Omnicanalidad", prompt: "Asignación ingresos venta online con retiro en tienda (Click & Collect). ¿Ingreso es de ecommerce o tienda física? Define política comisiones vendedores.", cuandoUsar: "Política ventas", tiempoEstimado: "45 min" }
            ]
        }]
    },
    // 7. CONSTRUCCIÓN
    {
        title: "🏗️ Construcción", color: "bg-yellow-600", iconName: "Hammer",
        subcategories: [{
            title: "Proyectos",
            prompts: [
                { id: 701, title: "Avance de Obra (POC)", prompt: "Calcula reconocimiento ingresos NIC 11/NIIF 15. Costos incurridos: [Incurridos]. Costos totales estimados: [Totales]. Ingreso total contrato: [Contrato]. Asiento ingreso periodo.", cuandoUsar: "Cierre mensual", tiempoEstimado: "60 min" },
                { id: 702, title: "Control Anticipos", prompt: "Conciliación anticipo subcontratista [Nombre]. Anticipo entregado: [Monto]. Actas obra aprobadas: [Actas]. Amortización aplicada: [Amortización]. Saldo por amortizar.", cuandoUsar: "Pagos semanales", tiempoEstimado: "45 min" },
                { id: 703, title: "Flujo Caja Obra", prompt: "Proyecta flujo caja semanal obra [Nombre]. Entradas (Anticipo cliente + Valuaciones): [Entradas]. Salidas (Nómina sem + Materiales + Subcontratos): [Salidas].", cuandoUsar: "Tesorería obra", tiempoEstimado: "60 min" },
                { id: 704, title: "Materiales vs Mano Obra", prompt: "Analiza desviación costos. Materiales: Presupuesto [Pres Mat] vs Real [Real Mat]. Mano Obra: Presupuesto [Pres MO] vs Real [Real MO]. Identifica causa raíz.", cuandoUsar: "Control costos", tiempoEstimado: "60 min" },
                { id: 705, title: "Gastos Generales (Overhead)", prompt: "Distribución gastos generales oficina central a proyectos activos [Lista Proyectos]. Base asignación: [Base, ej: Costos Directos]. Calcula cuota parte proyecto [Proyecto X].", cuandoUsar: "Asignación costos", tiempoEstimado: "45 min" },
                { id: 706, title: "Fondo Garantía", prompt: "Contabilización retención garantía cliente 10%. Factura actual: [Monto]. Retención: [Retención]. Cuenta por cobrar neta. Clasificación activo corriente vs no corriente.", cuandoUsar: "Facturación", tiempoEstimado: "30 min" },
                { id: 707, title: "Liquidación Subcontratista", prompt: "Prepara liquidación final subcontratista [Nombre]. Total contrato: [Total]. Pagado: [Pagado]. Descuentos materiales: [Descuentos]. Retenciones: [Retenciones]. Saldo final.", cuandoUsar: "Fin contrato", tiempoEstimado: "60 min" },
                { id: 708, title: "Comparativo Presupuestal", prompt: "Genera reporte S-Curve avance financiero vs físico. Avance financiero: [Financiero]%. Avance físico real en obra: [Físico]%. Alerta si pagado > ejecutado.", cuandoUsar: "Comité obra", tiempoEstimado: "45 min" },
                { id: 709, title: "Viabilidad Proyecto", prompt: "Estudio viabilidad financiera nuevo proyecto [Tipo]. Ventas estimadas: [Ventas]. Costo terreno: [Terreno]. Costo construcción m2: [Costo m2]. Margen utilidad esperado.", cuandoUsar: "Nuevos negocios", tiempoEstimado: "90 min" },
                { id: 710, title: "Activos Fijos Obra", prompt: "Control maquinaria amarilla. Equipo: [Equipo]. Horómetro inicio: [Inicio]. Horómetro fin: [Fin]. Costo hora: [Costo]. Asignar costo uso a centro costos proyecto.", cuandoUsar: "Cierre mes", tiempoEstimado: "30 min" }
            ]
        }]
    },
    // 8. SAAS
    {
        title: "💻 SaaS", color: "bg-indigo-500", iconName: "Laptop",
        subcategories: [{
            title: "Tech Startups",
            prompts: [
                { id: 801, title: "MRR Waterfall", prompt: "Construye reporte MRR Waterfall mes [Mes]. MRR Inicio: [Inicio]. New MRR: [New]. Expansion MRR: [Expansion]. Churn MRR: [Churn]. Contraction MRR: [Contraction].", cuandoUsar: "Reporte inversores", tiempoEstimado: "60 min" },
                { id: 802, title: "Churn Rate Impacto", prompt: "Analiza impacto financiero Churn Rate. Churn actual: [Tasa]%. Ingresos perdidos anualizados: [Monto]. Inversión necesaria en marketing para reponer esos clientes.", cuandoUsar: "Estrategia retención", tiempoEstimado: "45 min" },
                { id: 803, title: "CAC Payback", prompt: "Calcula meses recuperación CAC. Costo Adquisición Promedio: [CAC]. ARPU (Ingreso promedio usuario): [ARPU]. Margen Bruto %: [Margen]%. Fórmula Payback.", cuandoUsar: "Unit economics", tiempoEstimado: "30 min" },
                { id: 804, title: "LTV Cálculo", prompt: "Calcula Lifetime Value. ARPU: [ARPU]. Gross Margin: [Margin]%. Churn Rate Mensual: [Churn]%. LTV = (ARPU * Margin) / Churn. Evalúa ratio LTV:CAC.", cuandoUsar: "Valoración", tiempoEstimado: "30 min" },
                { id: 805, title: "Cohort Analysis", prompt: "Diseña tabla análisis cohortes retención. Usuarios adquiridos en [Mes Inico]. % activos mes 1, mes 2, mes 3... mes 12. Identifica tendencia retención.", cuandoUsar: "Análisis producto", tiempoEstimado: "60 min" },
                { id: 806, title: "Deferred Revenue (NIIF 15)", prompt: "Asiento diferido contrato anual cobrado anticipado. Valor: [Valor]. Fecha inicio: [Fecha]. Reconocimiento mensual ingreso recurrente (ARR).", cuandoUsar: "Facturación anual", tiempoEstimado: "30 min" },
                { id: 807, title: "Capitalización Desarrollo", prompt: "Evalúa si desarrollo software [Funcionalidad] cumple criterios NIC 38 para capitalizar. Fase: [Fase]. Costo developers: [Costo]. Viabilidad técnica comercial.", cuandoUsar: "Cierre desarrollo", tiempoEstimado: "60 min" },
                { id: 808, title: "Rule of 40", prompt: "Calcula Regla del 40. Tasa Crecimiento Ingresos: [Growth]%. Margen EBITDA: [EBITDA]%. Suma: [Suma]. ¿Es empresa saludable para Venture Capital?", cuandoUsar: "Benchmarking VC", tiempoEstimado: "30 min" },
                { id: 809, title: "Stock Options (ESOP)", prompt: "Contabilización gasto opciones acciones empleados (NIIF 2). Opciones otorgadas: [Cantidad]. Valor razonable opción (Black-Scholes): [Valor]. Periodo vesting: [Años].", cuandoUsar: "Cierre anual", tiempoEstimado: "60 min" },
                { id: 810, title: "Gross Margin SaaS", prompt: "Calcula margen bruto real. Ingresos: [Ingresos]. Costos directos (Hosting AWS/Azure + Soporte + Customer Success): [Costos]. Comparativo benchmark 80%.", cuandoUsar: "Análisis financiero", tiempoEstimado: "45 min" }
            ]
        }]
    },
    // 9. AGRONEGOCIOS
    {
        title: "🌾 Agronegocios", color: "bg-green-600", iconName: "Sprout",
        subcategories: [{
            title: "Campo",
            prompts: [
                { id: 901, title: "Activos Biológicos (NIC 41)", prompt: "Valoración activo biológico [Cultivo/Ganado]. Estado desarrollo: [Estado]. Costos incurridos: [Costos]. Valor mercado actual: [Valor Mercado]. Ajuste valor razonable.", cuandoUsar: "Cierre ejercicio", tiempoEstimado: "60 min" },
                { id: 902, title: "Costeo Cultivo (Fases)", prompt: "Acumulación costos cultivo [Nombre] por hectárea. Fase preparación: [Costo]. Siembra: [Costo]. Mantenimiento: [Costo]. Cosecha: [Costo]. Costo total tonelada.", cuandoUsar: "Fin ciclo", tiempoEstimado: "60 min" },
                { id: 903, title: "Rendimiento Hectárea", prompt: "Análisis varianza rendimiento. Presupuesto: [Ton/Ha Pres]. Real: [Ton/Ha Real]. Precio mercado: [Precio]. Impacto financiero diferencia rendimiento.", cuandoUsar: "Cosecha", tiempoEstimado: "45 min" },
                { id: 904, title: "Depreciación Plantaciones", prompt: "Cálculo depreciación cultivo permanente [Tipo, ej: Café/Palma]. Vida útil productiva: [Años]. Valor residual: [Valor]. Costo formación: [Costo].", cuandoUsar: "Activos fijos", tiempoEstimado: "30 min" },
                { id: 905, title: "Costos Cosecha", prompt: "Análisis costo recolección. Mano de obra: [MO]. Maquinaria: [Maq]. Transporte a planta: [Flete]. Costo por Kg recolectado vs precio venta.", cuandoUsar: "Temporada cosecha", tiempoEstimado: "45 min" },
                { id: 906, title: "Riesgo Climático", prompt: "Estimación impacto financiero pérdida por [Evento Climático]. Hectáreas afectadas: [Has]. Costo hundido: [Costo]. Recuperación seguro cosecha: [Seguro]. Pérdida neta.", cuandoUsar: "Siniestro", tiempoEstimado: "60 min" },
                { id: 907, title: "Ganadería (Cría vs Engorde)", prompt: "Separación costos hato. Costo mantenimiento vacas cría (Activo fijo): [Costo]. Costo levante terneros (Inventario): [Costo]. Asignación costos indirectos.", cuandoUsar: "Contabilidad ganadera", tiempoEstimado: "60 min" },
                { id: 908, title: "Subsidios Agrícolas", prompt: "Registro contable subsidio gobierno [Nombre Subsidio]. Monto: [Monto]. Condiciones cumplimiento: [Condiciones]. ¿Reconocer como ingreso inmediato o pasivo diferido?", cuandoUsar: "Recepción fondos", tiempoEstimado: "45 min" },
                { id: 909, title: "Inventario Insumos", prompt: "Control rotación insumos agrícolas (Fertilizantes/Agroquímicos). Inventario actual: [Valor]. Consumo ciclo: [Consumo]. Días inventario y riesgo vencimiento.", cuandoUsar: "Auditoría almacén", tiempoEstimado: "45 min" },
                { id: 910, title: "Flujo Caja Estacional", prompt: "Planificación tesorería ciclo agrícola. Meses inversión (flujo negativo): [Meses]. Meses cosecha (ingreso): [Meses]. Necesidad financiación capital trabajo: [Monto].", cuandoUsar: "Inicio siembra", tiempoEstimado: "90 min" }
            ]
        }]
    },
    // 10. SIN FINES DE LUCRO
    {
        title: "🎓 OSFL / ONG", color: "bg-violet-500", iconName: "Heart",
        subcategories: [{
            title: "Fundaciones",
            prompts: [
                { id: 1001, title: "Fondos Restringidos", prompt: "Contabilidad fondos donante [Donante]. Restricción uso: [Uso]. Monto recibido: [Monto]. Ejecutado a fecha: [Ejecutado]. Saldo disponible y reporte cumplimiento.", cuandoUsar: "Gestión donaciones", tiempoEstimado: "60 min" },
                { id: 1002, title: "Allocation Gastos", prompt: "Metodología distribución gastos administrativos (Overhead) a programas misionales [Prog A, Prog B]. Base asignación: [Base]. % Gasto Admin vs Gasto Misional.", cuandoUsar: "Cierre anual", tiempoEstimado: "60 min" },
                { id: 1003, title: "Reporte a Donantes", prompt: "Genera estructura reporte financiero para [Donante]. Comparativo Presupuesto vs Ejecución rubros: [Rubros]. Explicación narrativa desviaciones y logros.", cuandoUsar: "Rendición cuentas", tiempoEstimado: "90 min" },
                { id: 1004, title: "Sostenibilidad Financiera", prompt: "Análisis diversificación ingresos. % Donaciones: [Donaciones]%. % Servicios propios: [Servicios]%. % Subvenciones: [Subvenciones]%. Riesgo dependencia donante principal.", cuandoUsar: "Estrategia", tiempoEstimado: "45 min" },
                { id: 1005, title: "Valoración Voluntariado", prompt: "Cálculo aporte en especie voluntarios. Horas voluntariado año: [Horas]. Valor hora mercado: [Valor]. Nota a estados financieros sobre aporte social.", cuandoUsar: "Memoria anual", tiempoEstimado: "30 min" },
                { id: 1006, title: "Fundraising Efficiency", prompt: "Calcula ratio eficiencia recaudación. Costos Fundraising (Eventos+Mkt): [Costos]. Total Fondos Recaudados: [Recaudo]. Costo por cada $1 recaudado.", cuandoUsar: "Evaluación gestión", tiempoEstimado: "30 min" },
                { id: 1007, title: "Presupuesto por Programa", prompt: "Elabora presupuesto proyecto [Nombre]. Personal directo: [Personal]. Viáticos: [Viáticos]. Materiales: [Materiales]. % Admin permitido por donante: [Porcentaje]%.", cuandoUsar: "Formulación proyecto", tiempoEstimado: "60 min" },
                { id: 1008, title: "Cash Flow Subvenciones", prompt: "Proyección caja considerando desembolsos por tramos. Tramo 1: [Fecha/Monto]. Tramo 2 (contra entrega informe): [Fecha/Monto]. Gastos mensuales fijos proyecto.", cuandoUsar: "Inicio convenio", tiempoEstimado: "45 min" },
                { id: 1009, title: "Transparencia Compliance", prompt: "Checklist cumplimiento legal/tributario ESAL año [Año]. Declaración renta, Renovación cámara, Reportes entes control, Certificados donación. Estado actual.", cuandoUsar: "Auditoría cumplimiento", tiempoEstimado: "60 min" },
                { id: 1010, title: "Reserva Operativa", prompt: "Cálculo meta reserva operativa (ahorro). Gastos operativos mensuales promedio: [Gastos]. Meta cobertura (ej: 3 meses): [Meses]. Déficit/Superávit actual reserva.", cuandoUsar: "Política financiera", tiempoEstimado: "30 min" }
            ]
        }]
    },
    // PROMPTS BÁSICOS ORIGINALES
    {
        title: "📊 Análisis Financiero", color: "bg-blue-600", iconName: "PieChart",
        subcategories: [{
            title: "General",
            prompts: [
                { id: 1, title: "Análisis Vertical/Horizontal", prompt: "Realiza análisis vertical y horizontal balance [Empresa]. Año 1 vs Año 2. Identifica variaciones >10%.", cuandoUsar: "Cierre anual", tiempoEstimado: "30 min" },
                { id: 2, title: "Diagnóstico Dupont", prompt: "Calcula ROE sistema Dupont. Margen Neto: [Margen]. Rotación Activos: [Rotación]. Apalancamiento: [Mult].", cuandoUsar: "Análisis rentabilidad", tiempoEstimado: "30 min" }
            ]
        }]
    },
    {
        title: "⚖️ Impuestos", color: "bg-red-600", iconName: "Calendar",
        subcategories: [{
            title: "Fiscal",
            prompts: [
                { id: 10, title: "Planeación Tributaria", prompt: "Estrategias optimización renta año [Año] para empresa sector [Sector]. Ingresos: [Ingresos]. Deducciones proyectadas.", cuandoUsar: "Pre-cierre", tiempoEstimado: "60 min" }
            ]
        }]
    }
];
