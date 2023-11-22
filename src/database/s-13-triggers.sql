-- Crear la función que se ejecutará en el trigger
CREATE OR REPLACE FUNCTION verificar_email()
RETURNS TRIGGER AS $$
BEGIN
    -- Verificar si el nuevo valor de email ya existe en la tabla empleado
    IF EXISTS (
        SELECT 1
        FROM empleado
        WHERE email = NEW.email
    ) THEN
        -- Si existe, lanzar una excepción
        RAISE EXCEPTION 'El email ya existe en la tabla empleado.';
    END IF;

    -- Si no hay problema, continuar con la operación de inserción o actualización
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger
CREATE TRIGGER cliente_verificar_email
BEFORE INSERT OR UPDATE
ON cliente
FOR EACH ROW
EXECUTE FUNCTION verificar_email();

-- Crear la función que se ejecutará en el trigger
CREATE OR REPLACE FUNCTION verificar_email_empleado()
RETURNS TRIGGER AS $$
BEGIN
    -- Verificar si el nuevo valor de email ya existe en la tabla cliente
    IF EXISTS (
        SELECT 1
        FROM cliente
        WHERE email = NEW.email
    ) THEN
        -- Si existe, lanzar una excepción
        RAISE EXCEPTION 'El email ya existe en la tabla cliente.';
    END IF;

    -- Si no hay problema, continuar con la operación de inserción o actualización
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger
CREATE TRIGGER empleado_verificar_email
BEFORE INSERT OR UPDATE
ON empleado
FOR EACH ROW
EXECUTE FUNCTION verificar_email_empleado();



-- Crear la función que se ejecutará en el trigger
CREATE OR REPLACE FUNCTION actualizar_total_orden_general()
RETURNS TRIGGER AS $$
BEGIN
    -- Actualizar el valor total en orden_general después de una inserción, actualización o eliminación en orden_detalle
    UPDATE orden_general
    SET total = (
        SELECT COALESCE(SUM(subtotal), 0)
        FROM orden_detalle
        WHERE orden_detalle.orden_general_id = NEW.orden_general_id
    )
    WHERE orden_general.orden_general_id = NEW.orden_general_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger
CREATE TRIGGER actualizar_total_orden_detalle
AFTER INSERT OR UPDATE OR DELETE
ON orden_detalle
FOR EACH ROW
EXECUTE FUNCTION actualizar_total_orden_general();

