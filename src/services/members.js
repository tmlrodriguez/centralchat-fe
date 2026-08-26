import { apiRequest } from "../api/client.js";


/**
 * getPositions
 *
 * Description:
 * - Obtener las posiciones activas de una empresa.
 */
export function getPositions(companyId) {
    return apiRequest(`/members/companies/${companyId}/positions/`);
}


/**
 * getPosition
 *
 * Description:
 * - Obtener el detalle de una posición.
 */
export function getPosition(companyId, positionId) {
    return apiRequest(`/members/companies/${companyId}/positions/${positionId}/`);
}


/**
 * createPosition
 *
 * Description:
 * - Crear una posición dentro de una empresa.
 */
export function createPosition(companyId, data) {
    return apiRequest(`/members/companies/${companyId}/positions/`, {
        method: "POST",
        body: JSON.stringify(data),
    });
}


/**
 * updatePosition
 *
 * Description:
 * - Actualizar una posición existente.
 */
export function updatePosition(companyId, positionId, data) {
    return apiRequest(`/members/companies/${companyId}/positions/${positionId}/`, {
        method: "PATCH",
        body: JSON.stringify(data),
    });
}


/**
 * deactivatePosition
 *
 * Description:
 * - Desactivar una posición existente.
 */
export function deactivatePosition(companyId, positionId) {
    return apiRequest(`/members/companies/${companyId}/positions/${positionId}/`, {
        method: "DELETE",
    });
}


/**
 * getMembers
 *
 * Description:
 * - Obtener los miembros activos de una empresa.
 */
export function getMembers(companyId) {
    return apiRequest(`/members/companies/${companyId}/members/`);
}


/**
 * getMember
 *
 * Description:
 * - Obtener el detalle de un miembro.
 */
export function getMember(companyId, memberId) {
    return apiRequest(`/members/companies/${companyId}/members/${memberId}/`);
}


/**
 * createMember
 *
 * Description:
 * - Crear un miembro dentro de una empresa.
 */
export function createMember(companyId, data) {
    return apiRequest(`/members/companies/${companyId}/members/`, {
        method: "POST",
        body: JSON.stringify(data),
    });
}


/**
 * updateMember
 *
 * Description:
 * - Actualizar un miembro existente.
 */
export function updateMember(companyId, memberId, data) {
    return apiRequest(`/members/companies/${companyId}/members/${memberId}/`, {
        method: "PATCH",
        body: JSON.stringify(data),
    });
}


/**
 * deactivateMember
 *
 * Description:
 * - Desactivar un miembro existente.
 */
export function deactivateMember(companyId, memberId) {
    return apiRequest(`/members/companies/${companyId}/members/${memberId}/`, {
        method: "DELETE",
    });
}


/**
 * getBranchMembers
 *
 * Description:
 * - Obtener los miembros activos de una sucursal.
 */
export function getBranchMembers(companyId, branchId) {
    return apiRequest(`/members/companies/${companyId}/branches/${branchId}/members/`);
}